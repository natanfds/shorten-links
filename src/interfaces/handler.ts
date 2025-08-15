import { Request, Response } from 'express';

abstract class Handler {
    abstract execute(req: Request, res: Response): Promise<void>;
}

export default Handler;
