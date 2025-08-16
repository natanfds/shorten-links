import { Request, Response, NextFunction } from 'express';
import GeneralResponseDTO from '../dtos/generalResponse';
import getErrorData from '../utils/getErrorData';

function OnErrorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error('!!!Error!!!', getErrorData(err));

    const errorData: GeneralResponseDTO<string[]> = {
        status: 'error',
        message: 'Erro interno do servidor',
        data: [err.message],
    };
    res.status(500).json(errorData);
}

export default OnErrorMiddleware;
