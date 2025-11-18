import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from '../_lib/utils/auth';
import { orderService } from '../_lib/services/orderService';

export default requireAuth((req: VercelRequest, res: VercelResponse, user) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { orderId } = req.body || {};
  if (!orderId || typeof orderId !== 'string') {
    return res.status(400).json({ error: 'orderId é obrigatório' });
  }

  const order = orderService.findById(user.id, orderId);
  if (!order) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }

  if (order.status !== 'DRAFT') {
    return res.status(400).json({ error: 'Pedido já foi processado' });
  }

  order.status = 'PAID';
  order.invoice = {
    id: `inv-${Date.now()}`,
    invoiceNumber: `NF-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0')}`,
    pdfUrl: null,
  };

  orderService.updateOrder(order);

  return res.json({
    ok: true,
    payment: {
      status: 'CONFIRMED',
      method: 'credit_card',
    },
    invoiceId: order.invoice?.id ?? null,
  });
});

