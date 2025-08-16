import { Request, Response } from 'express';

import Handler from '../../interfaces/handler';
import { DTOShortenResponseURL, DTOShortenURL } from './dtos';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';
import ModelShortenedUrlInfo from './models';

class ShortenHandler extends Handler {
    shortenedUrlHandler: Repository<ModelShortenedUrlInfo>;

    constructor(shortenedUrlHandler: Repository<ModelShortenedUrlInfo>) {
        super();
        this.shortenedUrlHandler = shortenedUrlHandler;
    }

    async execute(req: Request, res: Response): Promise<void> {
        const data = req.body as unknown as DTOShortenURL;
        const short_url_param = nanoid(6);

        await this.shortenedUrlHandler.save({
            url: data.url,
            short_url_param: short_url_param,
        });

        const responseData: DTOShortenResponseURL = {
            url: data.url,
            short_url: 'https://localhost:3000/' + short_url_param,
        };

        res.status(201).send(responseData);
    }
}

export default ShortenHandler;
