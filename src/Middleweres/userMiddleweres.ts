import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { UserEntity } from "../Entities/user.entity";

export const isAdmMiddlewere = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  const token = authToken.split(" ")[1];

  const userRepo = AppDataSource.getRepository(UserEntity);

  return jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    async (error, decoded: any) => {
      if (error) {
        return res.send(error.message);
      }

      const user = await userRepo.findOneBy({
        id: decoded.sub,
      });

      if (user?.isAdm === false) {
        return res.status(403).json({ message: "Need admin permission" });
      }

      next();
    }
  );
};

export const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "Missing authorization headers" });
  }

  next();
};

export const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }
  next();
};
