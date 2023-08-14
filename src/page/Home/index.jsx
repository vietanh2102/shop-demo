import React, { useContext, useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
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
import LoadingHome from "../../component/Loading/LoadingHome";
function Shop() {
    const { products, loading } = useContext(ProductContext)
    // Pagination
    const { handleChangePage, pageSize, pagination } = useContext(ProductContext)
    const topProduct = products.filter(item => item.category === 'top')
    const tops = topProduct.slice(pagination.to, pagination.from)
    const menClothingBottomsTotal = products.filter((item) => item.category === "bottoms")
    const bottoms = menClothingBottomsTotal.slice(pagination.to, pagination.from)
    return (
        loading ? <LoadingHome /> :
            <section>
                <div>
                    <img src={img1} alt="erro" />
                </div>
                <div className="mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[6rem] xl:mx-[10rem] ">
                    <div>
                        <Link to={"/ao-nam"}>
                            <button className=" text-left font-bold py-[30px] hover:text-red-500 hover:underline">
                                Tops
                            </button>
                        </Link>
                    </div>
                    <div className=" w-full grid grid-cols-2 md:grid-cols-4  xl:grid-cols-4 gap-[20px]">
                        {
                            tops.map((item) => {
                                return (
                                    <Product key={item.id} products={item} />
                                )
                            })
                        }
                    </div>
                    <div className="my-[20px] flex justify-center">
                        <Pagination
                            count={Math.ceil(topProduct.length / pageSize)}
                            color="primary"
                            onChange={handleChangePage}
                        />
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
                <div className="mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[6rem] xl:mx-[10rem] ">
                    <div>
                        <Link to={"/quan-nam"}>
                            <button className=" text-left font-bold pb-[30px] hover:text-red-500 hover:underline">
                                Bottom
                            </button>
                        </Link>
                    </div>
                    <div className=" w-full grid grid-cols-2 md:grid-cols-4  xl:grid-cols-4 gap-[20px] mx-auto">
                        {
                            bottoms.map((item) => {
                                return (
                                    <Product key={item.id} products={item} />
                                )
                            })
                        }
                    </div>
                    <div className="my-[20px] flex justify-center w-full">
                        <Link to={'/quan-nam'}>
                            <button
                                className="w-[100%] h-[40px] bg-red text-white font-bold rounded-[4px] mr-[10px] hover:opacity-90"
                            >
                                Xem tất cả
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
    );
}

export default Shop;