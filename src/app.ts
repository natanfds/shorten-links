import * as express from 'express';
import router from './router';

const newApp = (port: number) => {
    const app: express.Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(router);
    // Configurações do servidor
    app.set('port', port);
    return app;
};

export default newApp;
