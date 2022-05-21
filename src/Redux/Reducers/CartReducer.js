import { ADD_CART_SUCCESS, DECREAMENT_ITEM_SUCCESS, INCREAMENT_ITEM, INCREAMENT_ITEM_SUCCESS, REMOVE_CART, REMOVE_ITEM_SUCCESS } from "../Action.Types/constant.type"

const initial={
    cart:[],
    totalPrice:0
}

const CartReducer=(state=initial,action)=>{
switch(action.type)
{
    case ADD_CART_SUCCESS:
        const productIndex=state.cart.findIndex(item=>item._id==action.payload.payload._id);
        if(productIndex >= 0)
        {
            state.cart[productIndex].qtys+=1;
        }
        else{
           
            const temp={...action.payload.payload,qtys:1}
            return {
                ...state,
                cart:[...state.cart,temp],
            }
             
        } 
        case REMOVE_ITEM_SUCCESS:
           console.log('from cart item reducer=',action.payload)
            return{
                ...state,
                cart:state.cart.filter(item=>item._id!==action.payload),
            }
            case INCREAMENT_ITEM_SUCCESS:
                const indexItem=state.cart.findIndex(_index=>_index._id==action.payload);
                const remainItem=state.cart.filter(item=>item._id!=action.payload);
                    return{
                        ...state,
                        cart: [...remainItem,{...state.cart[indexItem],qtys:state.cart[indexItem].qtys+1}],
                 }
                case DECREAMENT_ITEM_SUCCESS:
                    const dec_indexItem=state.cart.findIndex(item=>item._id==action.payload);
                    const dec_remain=state.cart.filter(item=>item._id!=action.payload);
                    return {
                             ...state,
                             cart:[...dec_remain,{...state.cart[dec_indexItem],qtys:state.cart[dec_indexItem].qtys-1}]
                    }
                    case REMOVE_CART:
                        return {
                            ...state,
                            cart:[]
                        }

    default:
        return state;
}
}
export default CartReducer;