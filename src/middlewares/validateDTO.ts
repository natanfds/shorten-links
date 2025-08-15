import { plainToInstance } from 'class-transformer';
import { ValidationError, validateSync } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import GeneralResponseDTO from '../dtos/generalResponse';

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
            const errorMessage: GeneralResponseDTO = {
                status: 'error',
                message: 'Validation failed',
                errors: errors.map((error: ValidationError) =>
                    Object.values(error.constraints as Object),
                ),
            };
            return res.status(400).json(errorMessage);
        }
        next();
    };
}

export default validateDTOMiddleware;
