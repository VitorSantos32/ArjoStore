import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from '../_lib/utils/auth';
import { productService } from '../_lib/services/productService';
import { orderService } from '../_lib/services/orderService';
import type { Address, OrderItem } from '../_lib/types';

const SHIPPING_THRESHOLD = 40000;
const BASE_SHIPPING = 1999;

export default requireAuth((req: VercelRequest, res: VercelResponse, user) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { items, address }: { items: { productId: string; quantity: number }[]; address?: Address } = req.body || {};

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Itens do pedido são obrigatórios' });
  }

  const products = productService.getAll();
  const orderItems: Omit<OrderItem, 'id'>[] = [];
  let itemsTotal = 0;

  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      return res.status(400).json({ error: `Produto ${item.productId} não encontrado` });
    }
    if (item.quantity <= 0) {
      return res.status(400).json({ error: 'Quantidade inválida' });
    }

    orderItems.push({
      productId: product.id,
      quantity: item.quantity,
      unitPrice: product.priceCents,
    });
    itemsTotal += product.priceCents * item.quantity;
  }

  const shippingCents = itemsTotal >= SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING;
  const totalCents = itemsTotal + shippingCents;

  const order = orderService.createOrder({
    userId: user.id,
    items: orderItems,
    shippingCents,
    totalCents,
    ...(address ? { address } : {}),
  });

  return res.status(201).json({
    orderId: order.id,
    totalCents: order.totalCents,
    shippingCents: order.shippingCents,
  });
});

