import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreamentItem, increamentItem, removeCartItem } from '../../Redux/Actions/Cart.Action';
import CalculationBody from '../calbody/calculationbody';
import CartItem from '../cartcards/cartItem';
import './cart.index.css';

const Cart=(props)=>{
    const dispatch=useDispatch();
const cart=useSelector(state => state.Cart);
// const [price,setPrice]=useState(0)
const removeCart=(id)=>{
    dispatch(removeCartItem(id));
}
const addIncreament=(id)=>{
    dispatch(increamentItem(id));
}
const addDecreament=(id)=>{
    dispatch(decreamentItem(id));
}
useEffect(()=>{
console.log(props.price)
},[])

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
                       <Button variant='contained'>Proceed</Button>
                       <Button variant='contained' color='error'>Cancel</Button>
                   </div>
               </div>
           </div>
    </>)
}
export default Cart;