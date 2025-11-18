import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAuth } from '../_lib/utils/auth';

export default requireAuth((_req: VercelRequest, res: VercelResponse, user) => {
  return res.status(200).json({ user });
});

