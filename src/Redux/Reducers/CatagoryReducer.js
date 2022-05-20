import { GET_CATAGORY_SUCCESS } from "../Action.Types/Catagory.Types";

const initial={
    catagory:[],
    isLoading:true,
    Loaded:false
}

export const CatagoryReducer=(state=initial,action)=>{
   switch(action.type)
   {
       case GET_CATAGORY_SUCCESS:
           console.log('from reducer',action.payload)
           return Object.create({
               ...state,
               catagory:[...action.payload._cata]
           })
           default:
               return state;
   }
}