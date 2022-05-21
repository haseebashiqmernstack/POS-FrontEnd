import { ADD_CART, INCREAMENT_ITEM, REMOVE_ITEM, DECREAMENT_ITEM, REMOVE_CART } from "../Action.Types/constant.type";

export const addToCart=(product)=>({
    type:ADD_CART,
    payload:product
})
export const removeCartItem=(id)=>({
    type:REMOVE_ITEM,
    payload:id
})
export const increamentItem=(id)=>({
    type:INCREAMENT_ITEM,
    payload:id
})
export const decreamentItem=(id)=>({
    type:DECREAMENT_ITEM,
    payload:id
})
export const removedCart=()=>{
    return {
        type:REMOVE_CART,
        payload:''
    }
}