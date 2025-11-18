import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { cep } = req.query;
  if (!cep || typeof cep !== 'string') {
    return res.status(400).json({ error: 'CEP inválido' });
  }

  if (!/^\d{8}$/.test(cep)) {
    return res.status(400).json({ error: 'Informe o CEP somente com números (8 dígitos)' });
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao consultar CEP:', error);
    return res.status(500).json({ error: 'Não foi possível buscar o CEP' });
  }
}

