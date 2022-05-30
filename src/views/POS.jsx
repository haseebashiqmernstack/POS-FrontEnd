import React, { useEffect, useState } from 'react';
import './style.css';
import {alertTitleClasses, Button, Card, CardActionArea, CardContent, CardMedia, TextField,Typography} from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import { getCatagory } from '../Redux/Actions/Catagory.Action';
import Cart from '../components/cart/cart.comp';
import apiInstance from '../apiHelper/ApiCaller';
import Catagory from '../components/catagory/catagory.comp';
import { getProducts } from '../Redux/Actions/Product.Action';
import Products from '../components/productdetail/product.comp';
import { addToCart } from '../Redux/Actions/Cart.Action';
const POS=()=>{
    const dispatch=useDispatch();
    const catagory=useSelector(state=>state.Catagory);
    const product=useSelector(state=>state.Product);
    const cart=useSelector(state=>state.Cart);
    const [price,setPrice]=useState(0);
    const [filterCatagory,setFilterCatagory]=useState([]);
    const [filterProduct,setFilterProduct]=useState([]);
    const [val,setVal]=useState('');
    const [proVal,setProVal]=useState('');
    useEffect(()=>{
        // alert('dhh')
        dispatch(getCatagory())
       console.log(window.web3)
    },[])
    useEffect(()=>{
        // console.log("from useEffect",cart.cart)
        setPrice(cart.cart.reduce((prev,current)=>{
            return prev+current.price*current.qtys;
        },0))
      })
    const findByIdProduct=(id)=>{
      dispatch(getProducts(id));
    }
    const addProductToCart=(item)=>{
        // alert(item);
        dispatch(addToCart(item));
    }
    const handleSearch=(e)=>{
        setVal(e.target.value);
        const newList=catagory.catagory.filter((cata)=>{
               return Object.values(cata)
               .join(" ")
               .toLowerCase()
               .includes(val.toLowerCase());
        })
        setFilterCatagory(newList);
    }
    const productHandleSearch=(e)=>{
        setProVal(e.target.value);
        const productList=product.product.filter(prod=>{
            return Object.values(prod)
            .join("")
            .toLowerCase()
            .includes(proVal.toLowerCase())
        })
         setFilterProduct(productList);
    }
    return (<>
           <div className='main-container'>
               <div className="catagory-panel">
                   <div className="search-bar">
                   <TextField value={val} onInput={handleSearch} variant='standard' label='Search product...' className='pro-search-input' />    
                   </div>
                   <div className="cat-render">
                      {
                        filterCatagory.length < 1 ?  catagory.catagory.map(cat=><Catagory cata={cat} findByIdProduct={findByIdProduct}/>) : 
                        filterCatagory.map(cat=><Catagory cata={cat} findByIdProduct={findByIdProduct}/>)
                      }                     
                     
                   </div>
               </div>
               <div className="product-panel">
                   <div className="product-search">
                        <TextField value={proVal} onInput={productHandleSearch} variant='standard' label='Search product...' className='pro-search-input' />    
                   </div>
                   <div className="product-cards">
                     {
                       filterProduct.length < 1 ?  product.product.map(pro=> <Products prod={pro} addProductToCart={addProductToCart}/>)
                       : filterProduct.map(pro=> <Products prod={pro} addProductToCart={addProductToCart}/>)
                     }

                   </div>
               </div>
               <div className="cal-panel">
 
                     <div className="cal-header">
                          <Typography variant="h4">Cart Items {`(${cart.cart.length})`}</Typography>
                    </div>
                     <div className="cal-body">
                         
                         <Cart price={price}/>
                     </div>

               </div>
           </div>
    </>)
}
export default POS;