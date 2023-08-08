import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";

function Product( { products } ) {
    const Show = () => {
        const { id, image,title } = products;
        const price = Number(products.price)
        return(
            <div className=" overflow-hidden h-auto w-full relative group">
            <div className=" flex justify-center items-center  h-auto">
                    {/* {img} */}
                    <div className=" flex justify-center items-center "> 
                        <Link to={`/product/${id}`}>
                            <img className=" max-h-[139px] xl:max-h-[208px] hover:scale-105 transition duration-300" src={image} alt="" />
                        </Link>
                    </div>
                </div>
                {/* {price & category & title} */}
                <div className="text-center mt-[10px]">
                    <Link className=" inline-block w-full hover:underline  hover:text-red-500 h-[50px]" to={`/product/${id}`}>{title}</Link>
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