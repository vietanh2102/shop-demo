import React, { useContext, useEffect } from "react";
import Product from "../../component/produc/ProductComponent";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../component/Loading";
import FilterProduct from "../../component/FilterProduct";
import ResultFilter from "../../component/ResultFilter";


function Bottoms() {
    const {loading,products,showFilter,setShowFilter} = useContext(ProductContext)
    useEffect(() =>{
        setShowFilter(false)
    },[] )
    const menClothingBottoms =  products.filter( (item) => item.category === "bottoms")
    
    return (
        loading ? <Loading /> :
            <div className="flex  mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[10rem] pt-[30px] h-full">
                <div className="hidden lg:flex w-[300px] h-full">
                        <FilterProduct />
                </div>
                <div className="w-full  ">
                    <h1 className=" font-bold text-[20px]">Quần nam</h1>
                    {showFilter ? <ResultFilter category="bottoms" /> :
                        <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] my-[15px] ">
                            {menClothingBottoms.map( item => {
                                return(
                                    <Product key={item.id} products={item} />
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
     );
}

export default Bottoms;