import { Response } from 'express';
import GeneralResponseDTO from '../dtos/generalResponse';

function apiSendResponse(
    res: Response,
    status: number,
    message: string,
    data: any,
    errors?: string[],
) {
    const response: GeneralResponseDTO = {
        status: status > 300 ? 'error' : 'success',
        message: message,
        data: data,
        errors: errors,
    };
    res.status(status).json(response);
}

export default apiSendResponse;
