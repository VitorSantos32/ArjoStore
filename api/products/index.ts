import type { VercelRequest, VercelResponse } from '@vercel/node';
import { productService } from '../_lib/services/productService';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const products = productService.getAll();
  return res.status(200).json(products);
}

