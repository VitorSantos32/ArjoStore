import type { VercelRequest, VercelResponse } from '@vercel/node';
import { productService } from '../_lib/services/productService';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID do produto é obrigatório' });
  }

  const product = productService.getById(id);
  if (!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  return res.status(200).json(product);
}

