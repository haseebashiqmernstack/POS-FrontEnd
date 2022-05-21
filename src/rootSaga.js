import { all } from "redux-saga/effects";
import CartSaga from "./Redux/Sagas/CartSaga";
import CatagorySaga from "./Redux/Sagas/CatagorySaga";
import ProductSaga from "./Redux/Sagas/Product.Saga";


export default function* RootSaga()
{
    yield all([
        CatagorySaga(),
        ProductSaga(),
        CartSaga()
    ])
}