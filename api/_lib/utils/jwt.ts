import jwt from 'jsonwebtoken';
import { User } from '../types';

const getSecret = () => {
  if (!process.env.JWT_SECRET) {
    console.warn('JWT_SECRET não definido. Usando valor padrão de desenvolvimento.');
  }
  return process.env.JWT_SECRET || 'dev-secret';
};

export const signToken = (user: User): string => {
  return jwt.sign(
    {
      sub: user.id,
      role: user.role,
    },
    getSecret(),
    {
      expiresIn: '7d',
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, getSecret()) as jwt.JwtPayload;
};

