import { CommentType } from './Comment.type';

export type ProductStateType = {
    products: any[]
    currentProduct: any | null
    loading: boolean
    error: string | null
    isCreateWindowOpen: boolean
}

export type ProductType = {
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

export type FormDataType = {
    name: string
    imageUrl: string
    count: number
    width: number
    height: number
    weight: string
}