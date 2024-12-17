import { call, put, takeEvery } from '@redux-saga/core/effects'
import { message } from 'antd'
import { deleteProductAPI } from '../../api/deleteProduct';
import { actions } from '../model/productActions';


function* deleteProduct(action: any) {
    try {
        yield call(deleteProductAPI, action.id)
        yield put(actions.getAllProducts())
        message.success('Product successfully deleted')
    } catch {
        yield put({ type: 'DELETE_PRODUCT_ERROR', error: 'Error fetching delete product' })
    }
}

export function* watchDeleteProduct() {
    yield takeEvery('DELETE_PRODUCT', deleteProduct)
}