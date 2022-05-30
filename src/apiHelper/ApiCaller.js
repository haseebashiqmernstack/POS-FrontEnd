import axios from 'axios';

const apiInstance=()=>{
   const GetAllCatagory=async ()=>{
        return await axios.get('http://localhost:5000/api/catagory/getcatagories')
        .then(res=>res.data);
}
const GetAllProducts=async (id) => {
    
    return await axios.get(`http://localhost:5000/api/product/getproductbyid/${id}`)
    .then(res=>res.data)
}
const AddOrder=async (data)=>{
    return await axios.post('http://localhost:5000/api/cart/addtocart',data)
    .then(res=>res.data)
}
return {
    GetAllCatagory,
    GetAllProducts,
    AddOrder
}
}
export default apiInstance();