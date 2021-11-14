import { Request, Response, NextFunction } from "express";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction){
    const httpStatus: number = error.status || 500
    return res.status(httpStatus).send({ status: httpStatus, message: error.message || "Internal server error :(" })
}