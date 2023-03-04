
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketTable from "../basket/BasketTable";



const Basket = ()=>{
    const  dispatch = useDispatch()
    const {basket} = useSelector((s)=> s)
    console.log(basket)
    return (
        <div>
        <div className="container">

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-10 py-3">
                    Product name
                </th>
                <th scope="col" class="px-10 py-3">
                    Image
                </th>
                <th scope="col" class="px-10 py-3">
                    Price
                </th>
                <th scope="col" class="px-10 py-3">
                    Quantity
                </th>
                
            </tr>
        </thead>
        <tbody>
       <div>    {
            basket.map((el)=> (
                <BasketTable el={el}/>
            ))
           }
           </div>
        </tbody>
    </table>
</div>

        </div>
        </div>
    )
}

export default Basket