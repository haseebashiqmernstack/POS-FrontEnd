import {all , put , call,fork,takeEvery} from 'redux-saga/effects';
import apiInstance from '../../apiHelper/ApiCaller';
import { GET_CATAGORY, GET_CATAGORY_SUCCESS } from '../Action.Types/Catagory.Types';

function* GetCatagories()
{
 yield takeEvery(GET_CATAGORY,function*(){
    const payload= yield call(apiInstance.GetAllCatagory)
    yield put({type:GET_CATAGORY_SUCCESS,payload:payload})
 })
}

export default function* CatagorySaga()
{
    yield all(
        [
            fork(GetCatagories)
        ]
    )
}