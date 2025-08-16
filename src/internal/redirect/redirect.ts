import { Request, Response } from 'express';

import Handler from '../../interfaces/handler';

class RedirectHandler extends Handler {
    constructor() {
        super();
    }

    async execute(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        res.redirect('https://google.com');
    }
}

export default RedirectHandler;
