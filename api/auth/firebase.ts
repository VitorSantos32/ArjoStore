import type { VercelRequest, VercelResponse } from '@vercel/node';
import { firebaseService } from '../_lib/services/firebaseService';
import { userService } from '../_lib/services/userService';
import { signToken } from '../_lib/utils/jwt';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { idToken, email, name } = req.body || {};

  if (!idToken || !email) {
    return res.status(400).json({ error: 'idToken e email são obrigatórios' });
  }

  try {
    const firebasePayload = await firebaseService.verifyToken(idToken);
    if (firebasePayload.email && firebasePayload.email !== email) {
      return res.status(400).json({ error: 'Email não corresponde ao token do Firebase' });
    }

    const finalEmail = (firebasePayload.email || email) as string;
    const finalName = name || firebasePayload.name || finalEmail.split('@')[0];

    const user = userService.upsertUser({
      email: finalEmail,
      name: finalName,
    });

    const token = signToken(user);

    return res.json({ token, user });
  } catch (error: any) {
    console.error('Erro no login Firebase:', error);
    return res.status(500).json({
      error: 'Erro ao autenticar com Firebase',
      details: error.message,
    });
  }
}

