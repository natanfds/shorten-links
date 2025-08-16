import GeneralResponseDTO from './generalResponse';

export default class WorkerResponse<T> {
    status: number;
    data: GeneralResponseDTO<T>;
}
