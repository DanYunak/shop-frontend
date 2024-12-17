import { CommentType } from '../redux/types/Comment.type';
import { instance } from './axiosInstance';

export type AxiosResponse = {
    data: [
        {
            id: number
            imageUrl: string
            name: string
            count: number
            size: {
                width: number
                height: number
            }
            weight: string
            comments: CommentType[]
        }
    ]
}

export const getAllProductsAPI: () => Promise<AxiosResponse> = () => {
    return instance.get('/products')
}