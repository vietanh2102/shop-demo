import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Product from "../../component/produc/ProductComponent";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../component/Loading";


function Bottoms() {
    const {loading,products} = useContext(ProductContext)
    const menClothingBottoms = products.filter( (item) => item.category === "bottoms")
    return (
        loading ? <Loading /> :
            <div className=" mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[18rem] py-[30px]">
                <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[20px] mx-auto">
                    {menClothingBottoms.map( item => {
                        return(
                            <Product key={item.id} products={item} />
                        )
                    })}
                </div>
            </div>
     );
}

export default Bottoms;