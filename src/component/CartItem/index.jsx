import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../Context/CartContext";

function CartItem({item}) {
    const {increaseItem,removeItem,deIncreaseItem} = useContext(CartContext)
    return ( 
        <div className=" grid grid-cols-12 text-center my-[10px] border-b border-inherit">
            <div className=" col-span-5 md:flex text-left p-[5px]">
                <div className="max-w-[100px]">
                    <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt="err" />
                    </Link>
                </div>
                <div className="ml-[5px]">
                    <Link to={`/product/${item.id}`}>
                        <h1 className=" hover:underline">{item.title}</h1>
                        <h1 className=" hover:underline">{item.price}đ</h1>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center col-span-3">
                <div className=" border-y border-inherit h-[40px] flex">
                    <div className="w-[30px] flex items-center justify-center">
                        <button className="w-full" onClick={() => deIncreaseItem(item.id)}>-</button>
                    </div>
                    <div className="w-[30px] flex items-center justify-center">{item.quatity}</div>
                    <div className="w-[30px] flex items-center justify-center">
                        <button className="w-full" onClick={() => increaseItem(item.id)}>+</button>
                    </div>
                </div>
            </div>
            <div className=" col-span-3 py-[8px]">{item.quatity*item.price}đ</div>
            <div className="py-[8px]">
                <button onClick={() => removeItem(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
     );
}

export default CartItem;