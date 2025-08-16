import { NextFunction, Request, Response } from 'express';
import WorkerResponse from '../dtos/workerResponse';

abstract class Handler<T extends WorkerResponse<any> | void> {
    abstract __worker(req: Request, res: Response, next: NextFunction): Promise<T>;

    async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
        const response = await this.__worker(req, res, next);
        if (response) {
            res.status(response.status).json(response.data);
        }
    }
}

export default Handler;
