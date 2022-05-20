import Constant, { GET_PRODUCT_SUCCESS } from "../Action.Types/constant.type";

const initial={
    product:[],
    isLoading:true,
}
const ProductReducer=(state=initial,action)=>{
    switch(action.type)
    {
       case GET_PRODUCT_SUCCESS:
           console.log(action.payload._pro)
           return Object.assign({
               product:[...action.payload._pro],
               isLoading:false,
           })
           default:
               return state;
    }
}
export default ProductReducer;