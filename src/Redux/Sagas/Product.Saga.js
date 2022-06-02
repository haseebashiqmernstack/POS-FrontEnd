import {takeEvery,all,put,fork,call} from 'redux-saga/effects';
import  { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, GET_PRODUCT, GET_PRODUCT_SUCCESS, SAVE_PRODUCT,SAVE_PRODUCT_SUCCESS } from '../Action.Types/constant.type';
import apiInstance from '../../apiHelper/ApiCaller';
function* FetchProducts(){
    yield takeEvery(FETCH_PRODUCTS,function*(){
            const product=yield call(apiInstance.FetchAllProducts)
            yield put({type:FETCH_PRODUCTS_SUCCESS,payload:product})        
    })
}
function* GetProducts()
{
   yield takeEvery(GET_PRODUCT,function*(payload){
       console.log(payload)
       const product= yield call(apiInstance.GetAllProducts,payload.payload);
       yield put({type:GET_PRODUCT_SUCCESS,payload:product})
   })
}
function* SaveProduct(){
    yield takeEvery(SAVE_PRODUCT,function*(payload){
        console.log(payload.payload);
        const data=yield call(apiInstance.SaveProduct,payload.payload)
        console.log(data)
        yield put({type:SAVE_PRODUCT_SUCCESS,payload:data._pro})
    })
}

export default function* ProductSaga(){
    yield all([
        fork(GetProducts),
        fork(SaveProduct),
        fork(FetchProducts)
    ])
}