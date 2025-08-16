import { Request, Response, NextFunction } from 'express';
import GeneralResponseDTO from '../dtos/generalResponse';

function OnErrorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error('!!!', err);
    const errorData: GeneralResponseDTO = {
        status: 'error',
        message: 'Erro interno do servidor',
        errors: [err.message],
    };
    res.status(500).json(errorData);
}

export default OnErrorMiddleware;
