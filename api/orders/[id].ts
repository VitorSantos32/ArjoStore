import type { VercelRequest, VercelResponse } from '@vercel/node';
import { orderService } from '../_lib/services/orderService';
import { productService } from '../_lib/services/productService';
import { requireAuth } from '../_lib/utils/auth';

export default requireAuth((req: VercelRequest, res: VercelResponse, user) => {
  const { id } = req.query;
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID do pedido é obrigatório' });
  }

  const order = orderService.findById(user.id, id);
  if (!order) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }

  const products = productService.getAll();
  const enriched = {
    ...order,
    items: order.items.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        ...item,
        product: product
          ? {
              id: product.id,
              name: product.name,
              images: product.images,
            }
          : undefined,
      };
    }),
  };

  return res.status(200).json(enriched);
});

