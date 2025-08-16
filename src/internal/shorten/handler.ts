import { Request, Response } from 'express';

import Handler from '../../interfaces/handler';
import { DTOShortenResponseURL, DTOShortenURL } from './dtos';

class ShortenHandler extends Handler {
    async execute(req: Request, res: Response): Promise<void> {
        const data = req.body as unknown as DTOShortenURL;
        const responseData: DTOShortenResponseURL = {
            url: data.url,
            short_url: data.url,
        };
        res.status(201).send(responseData);
    }
    constructor() {
        super();
    }
}

export default ShortenHandler;
