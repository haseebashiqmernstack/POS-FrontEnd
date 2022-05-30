import { Button,TextField } from '@mui/material';
import React from 'react';
import './cartitem.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const CartItem=(props)=>{
    return (<>
   <div className='close-card' onClick={()=>props.removeCart(props.items._id)}><button style={{display:'flex',justifyContent:'center',alignItems:'center'}}><DeleteOutlineOutlinedIcon/></button></div>
   <div className='cart-containers'>
    
       <div className='img-box'>
       <img src={`http://localhost:5000/public/${props.items.productPictures[0].img}`} alt="" />
       </div>
       <div className='i-des'>
           <h3>{props.items.name}</h3>
           <p>{`$ ${props.items.price * props.items.qtys}`}</p>
       </div>
       <div className='btn-qty'>
           <button className='minus' onClick={()=>props.addDecreament(props.items._id)}>-</button>
           <TextField variant='standard' value={props.items.qtys} className='input-field'/>
           <button className='plus' onClick={()=>props.addIncreament(props.items._id)}>+</button>
       </div>
    
   </div>
  
    </>)
}
export default CartItem;