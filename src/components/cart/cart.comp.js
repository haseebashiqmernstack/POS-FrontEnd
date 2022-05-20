import { Button } from '@mui/material';
import React, { useState } from 'react';
import CartItem from '../cartcards/cartItem';
import './cart.index.css';

const Cart=(props)=>{
const [item,setItem]=useState(['item-1','item-2','item-3','item-4','item-5']);
return (<>
           <div className="cart-container">
               <div className='cart-item-cards'>
                   <div className='cart-cards'>
                      {
                          item.map(elem=> <CartItem items={elem}/>)                          
                      }
                      
                   </div>
               </div>
               <div className='cal-part'>
                   <div className='result-cal'></div>
                   <div className='btn-cal'>
                       <Button variant='contained'>Proceed</Button>
                       <Button variant='contained' color='error'>Cancel</Button>
                   </div>
               </div>
           </div>
    </>)
}
export default Cart;