class GeneralResponseDTO<T> {
    status: 'error' | 'success';
    message: string;
    data?: T;
}

export default GeneralResponseDTO;
