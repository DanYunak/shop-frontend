import { watchHandleAllProducts } from './handleAllProducts';
import { all } from '@redux-saga/core/effects';
import { watchCreateProduct } from './createProduct';
import { watchDeleteProduct } from './deleteProduct';


export function* productRootSaga() {
    yield all([
        watchHandleAllProducts(),
        watchCreateProduct(),
        watchDeleteProduct()
    ])
}