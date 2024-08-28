import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

//para efeito de teste, vamos usar variáveis de ambiente para armazenar o usuaurio, senha e token
//em um ambiente de produção, utilize um banco de dados para armazenar essas informações
//ou utilize um serviço de autenticação como o Auth0
export const login = (req: Request, res: Response): void => {
  const { user, password } = req.body;

  if (user !==String(process.env.USER) || password !== String(process.env.PASSWORD)) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  }

  const tokenS = process.env.TOKEN_SECRET?.toString();

  const token = jwt.sign({ user }, String(tokenS), {
    expiresIn: '4h',
  });

  res.status(200).json({ token });
};

