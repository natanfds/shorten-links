import { Request, Response } from 'express';

import Handler from '../../interfaces/handler';
import { DTOShortenResponseURL, DTOShortenURL } from './dtos';
import { nanoid } from 'nanoid';
import { QueryFailedError, Repository } from 'typeorm';
import ModelShortenedUrlInfo from './models';
import WorkerResponse from '../../dtos/workerResponse';
import GeneralResponseDTO from '../../dtos/generalResponse';

class ShortenHandler extends Handler<WorkerResponse<DTOShortenResponseURL>> {
    shortenedUrlHandler: Repository<ModelShortenedUrlInfo>;

    constructor(shortenedUrlHandler: Repository<ModelShortenedUrlInfo>) {
        super();
        this.shortenedUrlHandler = shortenedUrlHandler;
    }

    async __worker(req: Request, res: Response): Promise<WorkerResponse<DTOShortenResponseURL>> {
        const data = req.body as unknown as DTOShortenURL;

        let short_url_param: string;
        let enlapsedCreationTries = 5;
        do {
            short_url_param = 'nanoid(6)';

            try {
                await this.shortenedUrlHandler.save({
                    url: data.url,
                    short_url_param: short_url_param,
                });
                enlapsedCreationTries = 0;
            } catch (error) {
                if (error instanceof QueryFailedError) {
                    if (enlapsedCreationTries == 1) {
                        throw error;
                    }
                    enlapsedCreationTries--;
                } else {
                    throw error;
                }
            }
        } while (enlapsedCreationTries > 0);

        const responseData: GeneralResponseDTO<DTOShortenResponseURL> = {
            status: 'success',
            message: 'URL shortened successfully',
            data: {
                url: data.url,
                short_url: 'https://localhost:3000/' + short_url_param,
            },
        };

        const response: WorkerResponse<DTOShortenResponseURL> = { status: 201, data: responseData };

        return response;
    }
}

export default ShortenHandler;
