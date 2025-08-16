import { NextFunction, Request, Response } from 'express';

abstract class Handler {
    abstract execute(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export default Handler;
