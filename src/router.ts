import { Router } from 'express';
import validateDTOMiddleware from './middlewares/validateDTO';
import { DTOShortenURL } from './internal/shorten/dtos';
import ShortenHandler from './internal/shorten/handler';
import RedirectHandler from './internal/redirect/redirect';
import ModelShortenedUrlInfo from './internal/shorten/models';
import createDataSource from './database/createDataSource';
import Env from './utils/env';

function createRouter(env: Env): Router {
    const sqlDataSource = createDataSource('sql', env);
    const shortenedURLRepository = sqlDataSource.getRepository(ModelShortenedUrlInfo);

    const shortenHandler = new ShortenHandler(shortenedURLRepository);
    const redirectHandler = new RedirectHandler(shortenedURLRepository);

    const router = Router();
    const api = Router();
    const apiV1 = Router();

    api.use(`/v1`, apiV1);
    router.use(`/api`, api);

    //declarações da API V1
    apiV1.post(
        `/shorten`,
        validateDTOMiddleware(DTOShortenURL),
        shortenHandler.handle.bind(shortenHandler),
    );

    //url geral
    router.get('/:short_url_param', redirectHandler.handle.bind(redirectHandler));
    return router;
}

export default createRouter;
