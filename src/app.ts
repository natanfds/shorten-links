import * as express from 'express';

export const newApp = (port: number) => {
    const app: express.Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Configurações do servidor
    app.set('port', port);
    return app;
};
