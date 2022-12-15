import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/PubicallyPages/Home';
import Login from './Components/UserAuthentication/Login';
import Signup from './Components/UserAuthentication/Signup';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Auth from './Components/UserAuthentication/Auth';
import { ProductDetail } from './Components/ShoppingCart/ProductDetail';
import CardDesign from './Components/PubicallyPages/CardDesign';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/UserLogin' element={<Login/>}/>
      <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/UserSignup' element={<Signup/>}/>
      <Route path='/shoppingCart' element={<Auth><ShoppingCart/></Auth>}/>
    </Routes>
    <CardDesign/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
