import { instance } from './axiosInstance';

export type AxiosResponse = {}

export const deleteProductAPI: (id: number) => Promise<AxiosResponse> = (id: number) => {
    return instance.delete(`/products/${id}`)
}