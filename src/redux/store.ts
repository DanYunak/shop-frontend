import { combineReducers } from 'redux';
import { productReducer } from './model/productReducer';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

const rootReducer = combineReducers({
    product: productReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(rootSaga)