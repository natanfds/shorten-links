import * as express from 'express';
import { newApp } from './app';

const main = () => {
    const App = newApp(3000);
    const port = App.get('port');

    App.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

main();
