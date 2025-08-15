class GeneralResponseDTO {
    status: 'error' | 'success';
    message: string;
    data?: any;
    errors?: any;
}

export default GeneralResponseDTO;
