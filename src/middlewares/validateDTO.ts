import { plainToInstance } from 'class-transformer';
import { ValidationError, validateSync } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import apiSendResponse from '../utils/apiSendResponse';

function validateDTOMiddleware<T>(dtoClass: new () => T) {
    return (req: Request, res: Response, next: NextFunction) => {
        const dtoInstance = plainToInstance(dtoClass, req.body);
        const DTO_VALIDATION_OPTIONS = {
            skipMissingProperties: false,
            whitelist: true,
            forbidNonWhitelisted: true,
        };

        const errors = validateSync(dtoInstance as Object, DTO_VALIDATION_OPTIONS);
        if (errors.length > 0) {
            const formatedErrors = errors
                .map((error: ValidationError) => Object.values(error.constraints as Object))
                .reduce((acc: string[], cur: string[]) => {
                    return acc.concat(cur);
                }, []);
            return apiSendResponse(res, 400, 'Validation failed', null, formatedErrors);
        }
        next();
    };
}

export default validateDTOMiddleware;
