import { Button,TextField } from '@mui/material';
import React from 'react';
import './cartitem.css';

const CartItem=(props)=>{
    return (<>
   <div className='close-card'><button>x</button></div>
   <div className='cart-containers'>
    
       <div className='img-box'>
       <img src="https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=" alt="" />
       </div>
       <div class='i-des'>
           <h3>Apple</h3>
           <p>$13</p>
       </div>
       <div className='btn-qty'>
           <button className='minus' onClick={()=>alert('jel')}>-</button>
           <TextField variant='standard' className='input-field'/>
           <button className='plus'>+</button>
       </div>
    
   </div>
  
    </>)
}
export default CartItem;