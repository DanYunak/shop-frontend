import { ProductType, FormDataType } from '../types/Product.type';

export const actions = {
    getAllProducts: () => ({ type: 'GET_ALL_PRODUCTS' } as const),

    setAllProducts: (products: ProductType[]) => ({ type: 'SET_ALL_PRODUCTS', products } as const),

    createProduct: (formData: FormDataType) => ({ type: 'CREATE_PRODUCT', formData } as const),
    deleteProduct: (id: number) => ({ type: 'DELETE_PRODUCT', id } as const),

    setIsCreateWindowOpen: (boolean: boolean) => ({ type: 'SET_IS_CREATE_WINDOW_OPEN', boolean } as const),
}