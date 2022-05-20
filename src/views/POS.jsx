import React, { useEffect } from 'react';
import './style.css';
import {alertTitleClasses, Button, Card, CardActionArea, CardContent, CardMedia, TextField,Typography} from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { getCatagory } from '../Redux/Actions/Catagory.Action';
import Cart from '../components/cart/cart.comp';
import apiInstance from '../apiHelper/ApiCaller';
import Catagory from '../components/catagory/catagory.comp';
import { getProducts } from '../Redux/Actions/Product.Action';
import Products from '../components/productdetail/product.comp';
const POS=()=>{
    const dispatch=useDispatch();
    const catagory=useSelector(state=>state.Catagory);
    const product=useSelector(state=>state.Product)
    useEffect(()=>{
        dispatch(getCatagory())
    },[])
    const findByIdProduct=(id)=>{
      dispatch(getProducts(id));
    }
    const addProductToCart=(id)=>{
        alert(id);
    }
    return (<>
           <div className='main-container'>
               <div className="catagory-panel">
                   <div className="search-bar">
                   <TextField variant='standard' label='Search product...' className='pro-search-input' />    
                   </div>
                   <div className="cat-render">
                      {
                          catagory.catagory.map(cat=><Catagory cata={cat} findByIdProduct={findByIdProduct}/>)
                      }                     
                     
                   </div>
               </div>
               <div className="product-panel">
                   <div className="product-search">
                        <TextField variant='standard' label='Search product...' className='pro-search-input' />    
                   </div>
                   <div className="product-cards">
                     {
                        product.product.map(pro=> <Products prod={pro} addProductToCart={addProductToCart}/>)
                     }

                   </div>
               </div>
               <div className="cal-panel">
 
                     <div className="cal-header">
                          <Typography variant="h4">Item Cart</Typography>
                          <Button label="get data" onClick={()=>dispatch(getCatagory())} variant="outlined">Get Data</Button>
                     </div>
                     <div className="cal-body">
                         <Cart/>
                     </div>

               </div>
           </div>
    </>)
}
export default POS;