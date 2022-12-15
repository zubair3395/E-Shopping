import React from 'react';
import {useState, useEffect} from 'react';
import Card from './Card';
import Total from './Total';
import Navbar from '../PubicallyPages/Navbar';

function ShoppingCart() {
  const [total, SetTotal ] = useState(0);
  const [productList, setProductList] = useState([]);
  
     function getData(){
    fetch('http://localhost:3004/Collection')
        .then(res=>res.json())
        .then(json=>  setProductList(json))
       }
  useEffect(()=>{
     getData()
  },[])
  function decrement(id){     
    let tempArray = productList;
    if(tempArray[id].quantity>1){
      tempArray[id].quantity-=1;
      setProductList([...tempArray]);
      SetTotal(total-(tempArray[id].quantity*tempArray[id].price))
    }
    if(tempArray[id].stock<100){
      tempArray[id].stock+=1;
    }
    
   
  }
  function increment(id){  
    let tempArray = productList;
    tempArray[id].quantity+=1;
    setProductList([...tempArray]);
    let subPrice= tempArray[id].quantity * tempArray[id].price;
    SetTotal(subPrice);
     tempArray[id].stock-=1;
  }
  return (
    <>
       <Navbar/>
       <div className='container my-3'>
        <h1>Shopping Cart </h1>
       <p>Homepage/Clothing Categories/Shopping Cart</p>
       
       </div>
       <div className="row">
        <div className="col-md-8">
          <hr />
        <Card decrement={decrement} increment={increment}  arr={productList} />
        </div>
        
        <div className="col-md-4">
        <Total total={total} className="postion-fixed"/>
        </div>
       </div>
    </>
  );
}

export default ShoppingCart;

