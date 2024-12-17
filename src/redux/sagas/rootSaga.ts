import { all, fork } from '@redux-saga/core/effects';
import { productRootSaga } from './productRootSaga';

export function* rootSaga() {
    yield all([
        fork(productRootSaga)
    ])
}