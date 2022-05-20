import { ADD_CART } from "../Action.Types/constant.type";

export const addToCart=(id)=>({
    type:ADD_CART,
    payload:id
})