import { Alert, Button, Dialog, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreamentItem, increamentItem, removeCartItem, removedCart } from '../../Redux/Actions/Cart.Action';
import CalculationBody from '../calbody/calculationbody';
import CartItem from '../cartcards/cartItem';
import MessageBox from '../controlls/message/messagebox';
import './cart.index.css';

const Cart=(props)=>{
    const [openMsg,setOpenMsg]=useState(false);
    const dispatch=useDispatch();
const cart=useSelector(state => state.Cart);
 const [openDialog,setOpenDialog]=useState(false);
const removeCart=(id)=>{
    dispatch(removeCartItem(id));
}
const addIncreament=(id)=>{
    dispatch(increamentItem(id));
}
const addDecreament=(id)=>{
    dispatch(decreamentItem(id));
}
// const handleOpen=()=>{
//     setOpenMsg(true);
// }
const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenMsg(false);
  };
return (<>
           <div className="cart-container">
               <div className='cart-item-cards'>
                   <div className='cart-cards'>
                      {
                          cart.cart.map(elem=> <CartItem items={elem} removeCart={removeCart} addIncreament={addIncreament} addDecreament={addDecreament}/>)                          
                      }
                      
                   </div>
               </div>
               <div className='cal-part'>
                   <div className='result-cal'>
                       <CalculationBody price={props.price}/>
                   </div>
                   <div className='btn-cal'>
                       <Button variant='contained' 
                       onClick={()=> cart.cart.length > 0 ? setOpenDialog(true) : <MessageBox duration={'3000'} message={'Cart box empty!'} open={true} type={'info'} handleClose={handleClose}/>}>Proceed</Button>
                       <Button variant='contained' color='error' onClick={()=> cart.cart.length > 0 ? dispatch(removedCart()) : setOpenMsg({open:true,message:'Cart box already empty!',type:'error'})}>Cancel</Button>
                   </div>
               </div>
           </div>
           {/* <Snackbar open={openMsg.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
                 <Alert severity={openMsg.type}>
                      {openMsg.message}
                 </Alert>
           </Snackbar> */}
           <Dialog open={openDialog}>
               <DialogTitle>
                   Order Preceeding Form
               </DialogTitle>
               <DialogContent>

               </DialogContent>
           </Dialog>
    </>)
}
export default Cart;