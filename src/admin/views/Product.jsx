import { Button, Dialog,DialogContent, DialogTitle, 
    Grid, 
    MenuItem, 
    Select, 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
     TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { fetchProducts, saveProduct } from '../../Redux/Actions/Product.Action';
import './adminStyle.css';
import GridOnIcon from '@mui/icons-material/GridOn';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
const Product=()=>{
    const dispatch=useDispatch();
const catagories=useSelector(state=>state.Catagory);
const product=useSelector(state=>state.Product);
const [name,setName] = useState('');
const [price,setPrice]=useState('');
const [qty,setQty]=useState('');
const [catagory,setCatagory]=useState('');
const [description,setDescription]=useState('');
const [file,setFile]=useState([]);
const [imgUpload,setImgUpload]=useState([]);
const [gridView,setGridView]=useState(true);
const [openForm,setOpenForm]=useState(false);
useEffect(()=>{
  dispatch(fetchProducts());
},[])
const submitProductFormData=(event)=>{
    event.preventDefault();
    setOpenForm(false);
    const form=new FormData();
    form.append('name',name);
    form.append('price',price);
    form.append('description',description);
    form.append('slug',name);
    form.append('qty',qty);
    form.append('catagory',catagory);
    for(let pic of file)
    {
        console.log(pic)
        form.append('myImage',pic);
    }
    // file.forEach(p=>console.log(p))
    dispatch(saveProduct(form));
}
const uploadFile=(e)=>{
    setImgUpload(Array.from(e.target.files).map((f,_index)=> (URL.createObjectURL(f))))
    setFile([...e.target.files])
}
// const handleProductView=()=>{
    
// }

    return (<>

<div className="product-container">
    <div className="product-header">
         <div className="product-search">
             <TextField variant="standard" className='search--product' label="Search products"/>
         </div>
         <div className="product-view">
             <div className="action-btn-group">
             <Button
             onClick={()=>setOpenForm(true)}
              variant="contained" 
             color="primary"><AddBoxOutlinedIcon/> Add Product</Button>
             </div>
             <div className="icon-btn">
             <GridOnIcon 
             style={{cursor:"pointer"}}
              onClick={()=>setGridView(true)}/>
              
               <TocOutlinedIcon 
               style={{cursor:"pointer"}}
                onClick={()=>setGridView(false)}/>
             </div>
            
         </div>
    </div>
    <div className="product-body">
        {
            gridView ? 
            <div className="admin-product-cards">
        {
            product.products && product.products.map(pro=>(
                <>
                
             <div className="admin-product-card">
                  <div className="card-head">
                      <div className="btn-operation" style={{position:"absolute",right:'0'}}>
                      <ModeEditOutlineOutlinedIcon
                      onClick={()=>alert(pro._id)} 
                      style={{cursor:"pointer"}} 
                      color='primary'/> 

                      <DeleteOutlineOutlinedIcon 
                      onClick={()=>alert(pro._id)}
                      style={{cursor:"pointer"}}
                       color='error'/>
                      </div>
                  
                  </div>
                  <div className="card-body">
                      <img src={`http://localhost:5000/public/${pro.productPictures[0].img}`} alt="" />
                  </div>
                  <div className="card-footer">
                      <p>Name: <span>{pro.name}</span></p>
                      <p>Status:<span style={{color:'green'}}>Active</span></p>
                  </div>
             </div>
         
                </>
            ))
        }
        </div>
        :
        <TableContainer>
          <Table>
                  <TableHead>
                      <TableRow color="primary">
                                <TableCell>Sr.no</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price($)</TableCell>
                                <TableCell>Catagory</TableCell>
                                
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {
                          product.products && product.products.map((_product,_index)=>(<>
                          <TableRow>
                              <TableCell>{++_index}</TableCell>
                              <TableCell><img src={`http://localhost:5000/public/${_product.productPictures[0].img}`} style={{height:"50px",width:"50px"}}/></TableCell>
                              <TableCell>{_product.name}</TableCell>
                              <TableCell>{_product.qty}</TableCell>
                              <TableCell>{_product.price}</TableCell>
                              <TableCell>{" "}</TableCell>
                          </TableRow>
                          </>))
                      }
                  </TableBody>
          </Table>
          </TableContainer>
        }
    

        

    </div>
</div>

<Dialog open={openForm} onClose={()=>setOpenForm(false)}>
<DialogTitle>Add Product Form</DialogTitle>
    <DialogContent>
        <form onSubmit={submitProductFormData} encType="multipart/form-data">
       <Grid container spacing={1}>
           <Grid item xs={6} md={6}>
              <TextField value={name} onChange={(e)=>setName(e.target.value)} variant={'outlined'} label={'Product name'}/>
           </Grid>
           <Grid item xs={6} md={6}>
           <TextField type="number" value={price} onChange={(e)=>setPrice(e.target.value)} variant={'outlined'} label={'Price'}/>
           </Grid>
           <Grid item xs={6} md={6}>
               <TextField type="number" value={qty} onChange={(e)=>setQty(e.target.value)} variant={'outlined'} label={'Quantity'}/>
           </Grid>
          
           <Grid item xs={6} md={6}>
               <select value={catagory} onChange={(e)=>setCatagory(e.target.value)} variant={'outlined'} label='-select catagory-'>
                   {
                
                catagories.catagory.map(cata=>(
                    <>
                    <option value={cata._id}>{cata.name}</option>
                    </>
                ))
            }
               </select>
           </Grid>
           <Grid item xs={12}>
               <TextField multiline style={{width:'100%'}} variant='outlined' label='Description'/>
           </Grid>
           <Grid item xs={6} md={6}>
               <input type="file" multiple onChange={uploadFile}/>
           </Grid>

<Grid item xs={2} md={2}>
    <Button variant={'contained'} type='submit' color={'primary'}><AddBoxOutlinedIcon/> Save</Button>
</Grid>
<Grid item xs={12}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
{ imgUpload.map(i=> (
          <>
          <div>
          <button style={{background:"red",color:'white'}} onClick={()=>setImgUpload(imgUpload.filter(images=> i!=images))}>X</button>
          <img src={i} style={{height:'70px',width:'70px',margin:'10px 10px'}}/>
          </div>
          </>
          )) }
          </div>
</Grid>
       </Grid>
       </form>
    </DialogContent>
</Dialog>


        
    </>)
}
export default Product;