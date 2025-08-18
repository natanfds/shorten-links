import 'dotenv/config';

class Env {
    PORT: number;
    ENV: 'dev' | 'prod' | 'test';
    constructor() {
        const variables = ['PORT', 'ENV'];
        variables.forEach((v) => {
            if (!process.env[v]) {
                throw new Error(`Variable ${v} not found`);
            }
        });
        this.PORT = Number(process.env.PORT);
        this.ENV = process.env.ENV as 'dev' | 'prod' | 'test';
    }
}

export default Env;
