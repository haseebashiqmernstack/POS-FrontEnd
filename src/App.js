import logo from './logo.svg';
import './App.css';
import POS from './views/POS';
import Navbar from './components/navbar/navbar';
import Product from './admin/views/Product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCatagory } from './Redux/Actions/Catagory.Action';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCatagory());
  },[])
  return (
    <div className="App">
      <POS/>
      {/* <Product/> */}
    </div>
  );
}

export default App;
