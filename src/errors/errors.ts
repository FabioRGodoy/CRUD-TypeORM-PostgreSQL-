// import { NextFunction, Request, Response } from "express";

// interface IError{
//   statusCode: (statusCode: any): void
// }

// class AppError extends Error {
//   statusCode(statusCode: any) {
//     throw new Error("Method not implemented.");
//   }
//   constructor(message: string | unknown, statusCode = 400) {
//     super();
//     this.message = { message} as string | unknown;
//     this.statusCode = statusCode;
//   }
// }

// export const errorHandler = (
//   error: Error,
//   request: Request,
//   response: Response,
//   next: NextFunction
// ) => {
//   if (error instanceof AppError) {
//     return response.status(error.statusCode).json({ message: error.message });
//   }

//   return response.status(500).json({ message: "Internal Server Error." });
// };

// export { AppError };
