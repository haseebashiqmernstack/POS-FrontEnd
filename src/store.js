import {combineReducers,compose,applyMiddleware,createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "./rootSaga";
const sagaMiddleware=createSagaMiddleware();
const middlewares=[sagaMiddleware];
const reducers=combineReducers({
    ...rootReducer,
});

const store=createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
)

sagaMiddleware.run(RootSaga);
export default store;