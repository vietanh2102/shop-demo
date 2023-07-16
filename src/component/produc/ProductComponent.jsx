import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductContext } from "../../Context/ProductContext";

function Product( { products } ) {
    const Show = () => {
        const { addItem } = useContext(CartContext)
        const { loading } = useContext(ProductContext)
        const { id, image,price,title } = products;
        return(
            <div className=" overflow-hidden h-auto w-full relative group">
            <div className=" flex justify-center items-center  h-auto">
                    {/* {img} */}
                    <div className=" flex justify-center items-center "> 
                        <Link to={`/product/${id}`}>
                            <img className=" max-h-auto hover:scale-105 transition duration-300" src={image} alt="" />
                        </Link>
                    </div>
                </div>
                {/* {price & category & title} */}
                <div className="text-center mt-[10px]">
                    <Link className=" inline-block w-full hover:underline  hover:text-red-500" to={`/product/${id}`}>{title.substring(0,22)}...</Link>
                    <div className=" font-semibold">{price.toLocaleString()}<span className=" underline decoration-slice">đ</span></div>
                </div>
        </div>
        )
    }
    return ( 
        <Show />
     );
}

export default Product;