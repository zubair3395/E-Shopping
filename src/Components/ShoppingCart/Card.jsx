import React from 'react'
import { useState } from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom';

export default function Card({increment, decrement, arr}) {
  const [like, setLike] = useState(false);
 function handleLike(){
    setLike(true)
 }
return (
      <>      
        { arr.map((element , index) =>
        
        <div className='row shadow my-5 mx-3' key={index}>
          <div className="col-md">
         <Link to={`/productDetail/${element.id}`}><img src={element.image} style={{with: "8rem", height: "10rem"}} className="my-3" alt="" /> </Link>   
          </div>
          <div className="col-md my-3">
            <div className="row">
              <strong>{element.category}</strong>
            </div>
            <div className="row">
              <p>Black |  XL</p>
            </div>
            <div className="row my-5">
              <article type="button" className='my-3'>Stock {element.stock} available</article>
            </div>
          </div>
          <div className="col-md my-5">
             <Buttons id={index} onClick={decrement} text={"-"}/>
              <b className="col-md">{element.quantity}</b>
              <Buttons id={index} onClick={increment}  text={"+"}/>
          
          </div>
          <div className="col-md">
            <button className='btn btn-outline-info mx-5 my-3'>Price: {element.price}</button>
            <button type="button" className='btn btn-info mx-5 my-5' onClick={()=>handleLike()}>Like <i className={`${like ? "bi bi-heart-fill" : "bi bi-heart"}`}></i></button>
          </div>
          </div>      
       )}                  
    </>
  )
}
