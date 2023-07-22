import React, { useContext } from "react";
import Product from "../../component/produc/ProductComponent";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../component/Loading";
import img from "../../assets/imgTop.jpg"
import FilterProduct from "../../component/FilterProduct";


function Tops() {
    const {showFilter,filterProduct,products,loading} = useContext(ProductContext)
    const top = products.filter( (item) => item.category === "top")
    const Show = () => {
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
                            {
                            top.map( item => {
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
    return(
        loading ? <Loading /> : <Show />
    )
}

export default Tops;