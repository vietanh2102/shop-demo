import React, { useContext } from "react";
import Product from "../../../component/produc/ProductComponent";
import { ProductContext } from "../../../Context/ProductContext";
import img from "../../../assets/imgTop.jpg"
import FilterProduct from "../../../component/FilterProduct";


function Hoodie() {
    const {filterProduct,products} = useContext(ProductContext)
    const hoodie = products.filter( (item) => item.detail === "hoodie")
    return (
        <div>
            <div className="mt-[-30px]">
                <img src={img} alt="erro" />
            </div>
            <div className="flex  mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[10rem] pt-[30px] h-full">
                <div className="hidden lg:flex w-[300px] h-full">
                        <FilterProduct />
                </div>
                <div className="w-full  ">
                    <h1 className=" font-bold text-[20px]">Áo Nam</h1>
                    <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] my-[15px] ">
                        {hoodie.map( item => {
                            return(
                                <Product key={item.id} products={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div> 
     );
}

export default Hoodie;