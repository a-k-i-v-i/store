import React from "react";
import {FaTrash} from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET, DECREASE_QUANTITY } from "../../store/actionTypes";

const BasketTable = ({el})=>{
    const dispatch = useDispatch()
    const addToBasket = (product)=>{
       dispatch({type : ADD_TO_BASKET, payload: product})
    }
    const decreaseQuantity = (id)=>{
        dispatch ({type: DECREASE_QUANTITY, payload: id})
    }
    return (
     
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {el.title}
                </th>
                <td className="px-6 py-4">
                    <img src={el.image} width={50} alt="" />
                </td>
                <td className="px-6 py-4">
                    {el.price * el.quantity}
                </td>
                <td className="px-6 py-4">
                    <span onClick={()=> decreaseQuantity(el.id)}
                    className="cursor-pointer">-</span>
                    {el.quantity}
                    <span onClick={()=> addToBasket(el)} className="cursor-pointer">+</span>
                </td>
                <button><FaTrash className="text-xl font-bold mt-2"/></button>
            </tr>
        
    )
}
export default BasketTable