import { DataSource } from 'typeorm';
import ModelShortenedUrlInfo from '../internal/shorten/models';

const SQLDataSource = new DataSource({
    type: 'sqlite',
    database: 'test.db',
    synchronize: true,
    logging: true,
    entities: [ModelShortenedUrlInfo],
    subscribers: [],
    migrations: [],
});

export default SQLDataSource;
