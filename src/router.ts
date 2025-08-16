import { Router } from 'express';
import validateDTOMiddleware from './middlewares/validateDTO';
import { DTOShortenURL } from './internal/shorten/dtos';
import ShortenHandler from './internal/shorten/handler';
import RedirectHandler from './internal/redirect/redirect';

const router = Router();
const api = Router();
const apiV1 = Router();

api.use(`/v1`, apiV1);
router.use(`/api`, api);

//declarações da API V1
const shortenHandler = new ShortenHandler();
apiV1.post(`/shorten`, validateDTOMiddleware(DTOShortenURL), shortenHandler.execute);
router.get('/:id', new RedirectHandler().execute);

export default router;
