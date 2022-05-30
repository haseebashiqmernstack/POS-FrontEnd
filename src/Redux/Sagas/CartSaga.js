import {takeEvery,all,put,fork, call} from 'redux-saga/effects';
import { ADD_CART, ADD_CART_SUCCESS, REMOVE_ITEM, 
    REMOVE_ITEM_SUCCESS, INCREAMENT_ITEM, INCREAMENT_ITEM_SUCCESS,
     DECREAMENT_ITEM, DECREAMENT_ITEM_SUCCESS, REMOVE_CART, REMOVE_CART_SUCCESS, ADD_ORDER,ADD_ORDER_SUCCESS } from '../Action.Types/constant.type';
import apiInstance from '../../apiHelper/ApiCaller';
function* AddToCart()
{
    yield takeEvery(ADD_CART,function*(payload){
        yield put({type:ADD_CART_SUCCESS,payload:payload})
    })
}
function* RemoveCartItem()
{
    yield takeEvery(REMOVE_ITEM,function*(payload){
        yield put({type:REMOVE_ITEM_SUCCESS,payload:payload.payload})
    })
}
function* IncreamentItem()
{
    yield takeEvery(INCREAMENT_ITEM,function*(payload){
        yield put({type:INCREAMENT_ITEM_SUCCESS,payload:payload.payload})
    })
}
function* DecreamentItem()
{
    yield takeEvery(DECREAMENT_ITEM,function*(payload){
        yield put({type:DECREAMENT_ITEM_SUCCESS,payload:payload.payload});
    })
}
function* RemoveCart()
{
    yield takeEvery(REMOVE_CART,function*(){
        yield put({type:REMOVE_CART_SUCCESS,payload:''});
    })
}
function* AddOrder()
{
    yield takeEvery(ADD_ORDER,function*(payload){
        yield call(apiInstance.AddOrder,payload.payload);
        yield put({type:ADD_ORDER_SUCCESS,payload:payload.payload})
    })
}

export default function* CartSaga(){
    yield all([
        fork(AddToCart),
        fork(RemoveCartItem),
        fork(IncreamentItem),
        fork(DecreamentItem),
        fork(RemoveCart),
        fork(AddOrder)
    ])
}