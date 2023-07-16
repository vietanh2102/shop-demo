import React, {useContext, useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
//import img
import bgImg1 from "../../assets/img/outfit1.webp"
import bgImg2 from "../../assets/img/outfit2.webp"
import bgImg3 from "../../assets/img/outfit3.webp"
import img1 from "../../assets/bg.webp"
//import ProducContext
import { ProductContext } from "../../Context/ProductContext";
import Product from "../../component/produc/ProductComponent";
import Loading from "../../component/Loading";
import { Link } from "react-router-dom";
function Shop() {
    const { products,loading } = useContext(ProductContext)
    const tops = products.filter(item => item.category === "top")
    const bottoms = products .filter(item => item.category === "bottoms")
    return (
        <section>
            <div>
                <img src={img1} alt="erro"/>
            </div>
            <div className="mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[18rem] ">
                <div>
                    <Link to={"/ao-nam"}>
                        <button className=" text-left font-bold py-[30px] hover:text-red-500 hover:underline">
                            Tops
                        </button>
                    </Link>
                </div>
                <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[20px]">
                    {
                        loading ? 
                        <Loading /> :
                        tops.map((item) => {
                            return (
                                <Product key={item.id} products={item} />
                            )
                        })
                    }
                </div>
            </div>
            {/* {OutFit} */}
            <div className="my-[30px] shadow">
                <div className="px-[50px] bg-[#f1f1f1] pt-[30]">
                    <div className="pt-[40px] pb-[30px]">
                        <span className=" text-[37px] font-bold">
                            OUTFIX OF THE DAY
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-x-[30px] pb-[40px]">
                        <img src={bgImg1} alt="err" />
                        <img src={bgImg2} alt="err" />
                        <img src={bgImg3} alt="err" />
                    </div>
                </div>
            </div>
            {/* {Bottoms} */}
            <div className="mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[18rem] ">
                <div>
                    <Link to={"/quan-nam"}>
                        <button className=" text-left font-bold pb-[30px] hover:text-red-500 hover:underline">
                            Bottom
                        </button>
                    </Link>
                </div>
                <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[20px] mx-auto">
                    {
                        loading ? 
                        <Loading /> :
                        bottoms.map((item) => {
                            return (
                                <Product key={item.id} products={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
     );
}

export default Shop;