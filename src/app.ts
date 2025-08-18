import * as express from 'express';
import createRouter from './router';
import OnErrorMiddleware from './middlewares/onError';
import Env from './utils/env';

const newApp = (env: Env) => {
    const app: express.Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(createRouter(env));

    app.use(OnErrorMiddleware);
    // Configurações do servidor
    app.set('port', env.PORT);
    return app;
};

export default newApp;
