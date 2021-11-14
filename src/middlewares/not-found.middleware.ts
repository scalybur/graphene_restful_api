import { Request, Response, NextFunction } from "express";

export function notFoundMiddleware(req: Request, res: Response, next: NextFunction){
    return res.status(404).send({message: "Not found :("})
}