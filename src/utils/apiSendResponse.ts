import { Response } from 'express';
import GeneralResponseDTO from '../dtos/generalResponse';

function apiSendResponse(res: Response, status: number, message: string, data: string[]) {
    const response: GeneralResponseDTO<string[]> = {
        status: status > 300 ? 'error' : 'success',
        message: message,
        data: data,
    };
    res.status(status).json(response);
}

export default apiSendResponse;
