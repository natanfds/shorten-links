import * as express from 'express';
import router from './router';
import OnErrorMiddleware from './middlewares/onError';

const newApp = (port: number) => {
    const app: express.Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(router);

    app.use(OnErrorMiddleware);
    // Configurações do servidor
    app.set('port', port);
    return app;
};

export default newApp;
