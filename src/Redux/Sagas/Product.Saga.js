import {takeEvery,all,put,fork,call} from 'redux-saga/effects';
import  { GET_PRODUCT, GET_PRODUCT_SUCCESS } from '../Action.Types/constant.type';
import apiInstance from '../../apiHelper/ApiCaller';
function* GetProducts()
{
   yield takeEvery(GET_PRODUCT,function*(payload){
       console.log(payload)
       const product= yield call(apiInstance.GetAllProducts,payload.payload);
       yield put({type:GET_PRODUCT_SUCCESS,payload:product})
   })
}


export default function* ProductSaga(){
    yield all([
        fork(GetProducts),
    ])
}