import { Router } from 'express';
import validateDTOMiddleware from './middlewares/validateDTO';
import { DTOShortenURL } from './internal/shorten/dtos';
import ShortenHandler from './internal/shorten/handler';
import RedirectHandler from './internal/redirect/redirect';
import SQLDataSource from './database/sql';
import ModelShortenedUrlInfo from './internal/shorten/models';

Promise.resolve(SQLDataSource.initialize());

const shortenedURLRepository = SQLDataSource.getRepository(ModelShortenedUrlInfo);

const router = Router();
const api = Router();
const apiV1 = Router();

api.use(`/v1`, apiV1);
router.use(`/api`, api);

//declarações da API V1
const shortenHandler = new ShortenHandler(shortenedURLRepository);
const redirectHandler = new RedirectHandler(shortenedURLRepository);
apiV1.post(
    `/shorten`,
    validateDTOMiddleware(DTOShortenURL),
    shortenHandler.execute.bind(shortenHandler),
);

//url geral
router.get('/:short_url_param', redirectHandler.execute.bind(redirectHandler));

export default router;
