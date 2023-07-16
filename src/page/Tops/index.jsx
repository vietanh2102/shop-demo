import React, { useContext } from "react";
import Product from "../../component/produc/ProductComponent";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../component/Loading";
import img from "../../assets/imgTop.jpg"
import FilterProduct from "../../component/FilterProduct";


function Tops() {
    const {loading,filterProduct,products} = useContext(ProductContext)
    const top = filterProduct.length > 0 ? filterProduct : 
    products.filter( (item) => item.category === "top")
    return (
        <div>
            <div>
                <img src={img} alt="erro" />
            </div>
            <div className=" mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[18rem] py-[30px]">
                <FilterProduct />
                <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] ">
                    {top.map( item => {
                        return(
                            <Product key={item.id} products={item} />
                        )
                    })}
                </div>
            </div>
        </div> 
     );
}

export default Tops;