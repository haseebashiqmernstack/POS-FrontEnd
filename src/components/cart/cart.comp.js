import { Alert, Button, Dialog, DialogContent, DialogTitle, Snackbar, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, decreamentItem, increamentItem, removeCartItem, removedCart } from '../../Redux/Actions/Cart.Action';
import CalculationBody from '../calbody/calculationbody';
import CartItem from '../cartcards/cartItem';
import MessageBox from '../controlls/message/messagebox';
import './cart.index.css';

const Cart=(props)=>{
    const [openMsg,setOpenMsg]=useState(false);
    const dispatch=useDispatch();
const cart=useSelector(state => state.Cart);
 const [openDialog,setOpenDialog]=useState(false);
 const [orderNo,setOrederNo]=useState('');
 const [customer,setCustomer]=useState('');
 const [orderCart,setOrderCart]=useState([]);
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
  useEffect(()=>{
      if(cart.isOrderSaved)
      {
          alert('saved successfull')
         setOpenDialog(false);
         setCustomer('');
         setOrederNo('');
         setOrderCart([]);
      }
  },[cart.isOrderSaved])
  const saveOrder=(e)=>{
      const cartData={
          customer,
          orderNo,
          cartItems:cart.cart
      }
    //   console.log(cartData);
     cartData && dispatch(addOrder(cartData));
  }
  const combineFun=(a,b)=>{
      a(true);
      b(cart.cart);
  }
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
                       onClick={()=> cart.cart.length > 0 ? combineFun(setOpenDialog,setOrderCart) : <MessageBox duration={'3000'} message={'Cart box empty!'} open={true} type={'info'} handleClose={handleClose}/>}>Checkout</Button>
                       <Button variant='contained' color='error' onClick={()=> cart.cart.length > 0 ? dispatch(removedCart()) : setOpenMsg({open:true,message:'Cart box already empty!',type:'error'})}>Cancel</Button>
                   </div>
               </div>
           </div>
           {/* <Snackbar open={openMsg.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
                 <Alert severity={openMsg.type}>
                      {openMsg.message}
                 </Alert>
           </Snackbar> */}
           <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
               <DialogTitle>Order Proceed Form</DialogTitle>
               <DialogContent>
                   <TextField variant='outlined' value={orderNo} onChange={(e)=>setOrederNo(e.target.value)} placeholder='Order no'/>
                   <TextField variant='outlined' value={customer} onChange={(e)=>setCustomer(e.target.value)} placeholder='Enter customer name...' style={{margin:"0 10px"}}/>
                    <Table>
                        <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sr.no</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Unit Price($)</TableCell>
                                <TableCell>Total($)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                orderCart.length > 0 ? 
                                orderCart.map((item,index)=> (
                                    <>
                                    <TableRow>
                                        <TableCell>
                                            {++index}
                                        </TableCell>
                                        <TableCell>
                                            {
                                                item.name
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {
                                                item.qtys
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {
                                                item.price
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {
                                                item.qtys * item.price
                                            }
                                        </TableCell>
                                    </TableRow>
                                    </>
                                )) : <><h2>no record</h2></>
                            }
                            <TableRow>
                                <TableCell colSpan={3}></TableCell>
                                <TableCell colSpan={2} style={{margin:"0 20px"}}>
                                    Total Price $
                                    {
                                        props.price
                                        
                                        // cart.cart.reduce((prev,current)=>{
                                        //       return prev+current.price*current.qtys;
                                        // },0)
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        </TableContainer>
                        <TableFooter>
                            <Button variant='contained' onClick={saveOrder} color='primary' style={{margin:"10px 0",float:'right'}}>
                                Proceed
                            </Button>
                                                        </TableFooter>
                    </Table>
               </DialogContent>
           </Dialog>
    </>)
}
export default Cart;