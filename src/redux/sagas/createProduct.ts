import { FormDataType } from '../types/Product.type';
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { message } from 'antd'
import { createProductAPI } from '../../api/createProduct';
import { actions } from '../model/productActions';

type ActionType = {
    formData: FormDataType
}

function* createProduct(action: ActionType | any) {
    try {
        yield call(createProductAPI, action.formData)
        yield put(actions.getAllProducts())
        yield put(actions.setIsCreateWindowOpen(false))
        message.success('Product successfully created')
    } catch {
        yield put({ type: 'CREATE_PRODUCT_ERROR', error: 'Error fetching create product' })
    }
}

export function* watchCreateProduct() {
    yield takeEvery('CREATE_PRODUCT', createProduct)
}