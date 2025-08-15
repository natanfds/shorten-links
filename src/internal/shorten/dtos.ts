import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class DTOShortenURL {
    @IsString()
    @IsUrl()
    @IsNotEmpty()
    url: string;
}

export class DTOShortenResponseURL {
    url: string;
    short_url: string;
}
