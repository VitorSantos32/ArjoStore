import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { User } from '../types';
import { verifyToken } from './jwt';
import { userService } from '../services/userService';

export const getUserFromRequest = (req: VercelRequest): User | null => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const [, token] = authHeader.split(' ');
  if (!token) return null;

  try {
    const payload = verifyToken(token);
    if (!payload.sub) return null;
    const user = userService.findById(String(payload.sub));
    return user ?? null;
  } catch (error) {
    console.warn('Token inválido', error);
    return null;
  }
};

type HandlerWithUser = (
  req: VercelRequest,
  res: VercelResponse,
  user: User
) => void | VercelResponse | Promise<void | VercelResponse>;

export const requireAuth =
  (handler: HandlerWithUser) => async (req: VercelRequest, res: VercelResponse) => {
    const user = getUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: 'Não autenticado' });
    }
    return handler(req, res, user);
  };

