import { NextFunction, Request, Response } from 'express';

import Handler from '../../interfaces/handler';
import { Repository } from 'typeorm';
import ModelShortenedUrlInfo from '../shorten/models';
import apiSendResponse from '../../utils/apiSendResponse';

class RedirectHandler extends Handler<void> {
    async __worker(req: Request, res: Response, next: NextFunction): Promise<void> {
        const short_url_param = String(req.params.short_url_param);
        const shortenedUrlData = await this.shortenedUrlHandler.findOneBy({
            short_url_param: short_url_param,
        });
        if (!shortenedUrlData) {
            apiSendResponse(res, 404, 'URL not found', ['URL not found']);
            return;
        }

        let { url } = shortenedUrlData;
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        res.redirect(url);
    }
    shortenedUrlHandler: Repository<ModelShortenedUrlInfo>;

    constructor(shortenedUrlHandler: Repository<ModelShortenedUrlInfo>) {
        super();
        this.shortenedUrlHandler = shortenedUrlHandler;
    }

    async execute(req: Request, res: Response): Promise<void> {
        const short_url_param = String(req.params.short_url_param);
        const shortenedUrlData = await this.shortenedUrlHandler.findOneBy({
            short_url_param: short_url_param,
        });
        if (!shortenedUrlData) {
            apiSendResponse(res, 404, 'URL not found', ['URL not found']);
            return;
        }

        let { url } = shortenedUrlData;
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }
        res.redirect(url);
    }
}

export default RedirectHandler;
