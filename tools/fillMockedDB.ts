import 'reflect-metadata';
import { nanoid } from 'nanoid';
import createDataSource from '../src/database/createDataSource';
import ModelShortenedUrlInfo from '../src/internal/shorten/models';
import Env from '../src/utils/env';
import { faker } from '@faker-js/faker';

async function fillMokedDB() {
    const env = new Env();
    const dataSource = await createDataSource('sql', env);

    console.log('Creating mocked DB...');
    const shortenedUrlRepository = dataSource.getRepository(ModelShortenedUrlInfo);

    const fakeUrls = Array.from({ length: 20 }).map(() => {
        return shortenedUrlRepository.create({
            short_url_param: nanoid(6),
            url: faker.internet.url(),
        });
    });

    await shortenedUrlRepository.save(fakeUrls);
    console.log('Mocked DB filled');

    if (dataSource.isInitialized) {
        await dataSource.destroy();
    }
}

fillMokedDB();
