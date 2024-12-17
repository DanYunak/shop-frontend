import { ProductType, FormDataType } from '../redux/types/Product.type';
import { instance } from './axiosInstance';

export type AxiosResponse = {
    data: ProductType
}

export const createProductAPI: (formData: FormDataType) => Promise<AxiosResponse> = (formData: FormDataType) => {
    return instance.post('/products', formData)
}