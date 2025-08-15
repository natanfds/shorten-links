import { Router } from 'express';
import validateDTOMiddleware from './middlewares/validateDTO';
import { DTOShortenURL } from './internal/shorten/dtos';
import ShortenHandler from './internal/shorten/handler';

const router = Router();
const api = Router();
const apiV1 = Router();

api.use(`/v1`, apiV1);
router.use(`/api`, api);

//declarações da API V1
apiV1.get(`/`, (req, res) => {
    res.send('Hello World!');
});

const shortenHandler = new ShortenHandler();
apiV1.post(`/shorten`, validateDTOMiddleware(DTOShortenURL), shortenHandler.execute);

export default router;
