import { actions } from '../model/productActions';
import { call, put, takeEvery } from '@redux-saga/core/effects'
import { AxiosResponse, getAllProductsAPI } from '../../api/getAllProducts';

function* handleAllProducts() {
    try {
        const res: AxiosResponse = yield call(getAllProductsAPI)
        yield put(actions.setAllProducts(res.data))
    } catch {
        yield put({ type: 'SET_ALL_PRODUCTS_ERRORS', error: 'Error fetching all tours' })
    }
}

export function* watchHandleAllProducts() {
    yield takeEvery('GET_ALL_PRODUCTS', handleAllProducts)
}