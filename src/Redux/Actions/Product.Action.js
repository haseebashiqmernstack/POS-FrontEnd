import { GET_PRODUCT } from "../Action.Types/constant.type";

export const getProducts=(id)=>({
    type:GET_PRODUCT,
    payload:id
});