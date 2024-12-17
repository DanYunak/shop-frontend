import { InferActionsTypes } from '../store';
import { actions } from './productActions';
import { ProductStateType } from '../types/Product.type';

const initialState: ProductStateType = {
    products: [],
    currentProduct: null,
    loading: false,
    error: null,
    isCreateWindowOpen: false
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const productReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'SET_ALL_PRODUCTS':
            return {
                ...state,
                products: [...action.products]
            }

        case 'SET_IS_CREATE_WINDOW_OPEN':
            return {
                ...state,
                isCreateWindowOpen: action.boolean
            }
        
        default: return state
    }
}