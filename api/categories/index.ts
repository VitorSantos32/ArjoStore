import type { VercelRequest, VercelResponse } from '@vercel/node';
import { productService } from '../_lib/services/productService';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const categories = productService.getCategories();
  return res.status(200).json(categories);
}

