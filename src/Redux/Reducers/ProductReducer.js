import Constant, { DELETE_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS,
     GET_PRODUCT_SUCCESS, SAVE_PRODUCT_SUCCESS } from "../Action.Types/constant.type";

const initial={
    product:[],
    products:[],
    isLoading:true,
    isSaved:false
}
const ProductReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case SAVE_PRODUCT_SUCCESS:
            console.log("from reducers save",action.payload)
            return {
                ...state,
                products:[...state.products,action.payload],
                isSaved:true
            }
            case FETCH_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    products:[...action.payload._pro],
                }
       case GET_PRODUCT_SUCCESS:
           console.log(action.payload._pro)
           return Object.assign({
               ...state,
               product:[...action.payload._pro],
               isLoading:false,
           })
           case DELETE_PRODUCT_SUCCESS:
               return {
                   ...state,
                   products:state.products.filter(p=>p._id!=action.payload)
               }
           default:
               return state;
    }
}
export default ProductReducer;