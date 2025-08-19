import { DataSource, DataSourceOptions } from 'typeorm';
import Env from '../utils/env';
import ModelShortenedUrlInfo from '../internal/shorten/models';

async function createDataSource(kind: 'sql', env: Env): Promise<DataSource> {
    let dataSourceOptions: DataSourceOptions;
    switch (kind) {
        case 'sql':
            dataSourceOptions = {
                type: 'sqlite',
                database: 'test.db',
                synchronize: true,
                logging: true,
                entities: [ModelShortenedUrlInfo],
                subscribers: [],
                migrations: [],
            };
            break;
        default:
            throw new Error(`Unknown data source kind ${kind}`);
    }

    const dataSource = new DataSource(dataSourceOptions);
    await dataSource.initialize();
    return dataSource;
}

export default createDataSource;
