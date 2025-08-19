import newApp from './app';
import 'reflect-metadata';
import Env from './utils/env';

const main = async () => {
    const env: Env = new Env();
    const App = await newApp(env);
    const port = App.get('port');

    App.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

main();
