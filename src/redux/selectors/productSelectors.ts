import { AppStateType } from '../store';

export const getAllProducts = (state: AppStateType) => {
    return state.product.products
}

export const getCurrentProduct = (state: AppStateType) => {
    return state.product.currentProduct
}

export const getIsCreateWindowOpen = (state: AppStateType) => {
    return state.product.isCreateWindowOpen
}