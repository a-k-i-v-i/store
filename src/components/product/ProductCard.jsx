import React from "react";
import {BsFillBasket3Fill} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET } from "../../store/actionTypes";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const addToBasket = (product)=>{
       dispatch({type : ADD_TO_BASKET, payload: product})
    }
  return (
    <div className="mx-2 py-2 basis-1/5 ">
      <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src={product.image} 
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>
          <p className="text-[15px]">{product.description}</p>
      
          <button onClick={()=> addToBasket(product)}
           class="text-white bg-blue-500  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><BsFillBasket3Fill/></button>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
