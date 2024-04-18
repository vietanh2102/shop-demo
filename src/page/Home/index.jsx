import React, { useContext, useEffect, useRef, useState } from "react";
import Pagination from '@mui/material/Pagination';
import 'react-loading-skeleton/dist/skeleton.css'
//import img
import bgImg1 from "../../assets/img/outfit1.webp"
import bgImg2 from "../../assets/img/outfit2.webp"
import bgImg3 from "../../assets/img/outfit3.webp"

//import ProducContext
import { ProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import LoadingHome from "../../component/Loading/LoadingHome";
import Slide from "../../component/Slide/Slice";
import TextSale from "../../component/TextSale/TextSale";
import TitleProduct from "./component/TitleProduct";
import ShowProduct from "./component/ShowProduct";
import { IsIntoView } from "../../hooks/useShow";
function Shop() {
    const { products, loading } = useContext(ProductContext)
    // Pagination
    const { handleChangePage, pageSize, pagination } = useContext(ProductContext)
    const topProduct = products.filter(item => item.category === 'top')
    const tops = topProduct.slice(pagination.to, pagination.from)
    const menClothingBottomsTotal = products.filter((item) => item.category === "bottoms")
    const bottoms = menClothingBottomsTotal.slice(0, 8)
    //setShow
    const refTitle = useRef(null)
    const refImg = useRef(null)
    const [isViewTitle, setIsViewTitle] = useState(false)
    const [isViewImg, setIsViewImg] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            IsIntoView(refTitle, setIsViewTitle)
            IsIntoView(refImg, setIsViewImg)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        loading ? <LoadingHome /> :
            <section>
                <Slide />
                <TextSale />
                <div className="mx-0 sm:mx-[30px] md:mx-[6rem] lg:mx-[6rem] xl:mx-[10rem] ">
                    <TitleProduct path={"/ao-nam"} title={"Tops"} />
                    <ShowProduct productList={tops} />
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
                        <div
                            ref={refTitle}
                            className={`pt-[40px] pb-[30px] duration-[600ms] ${isViewTitle ? 'translate-y-0 opacity-1' : 'translate-y-[80px] opacity-0'}`}
                        >
                            <span className=" text-[37px] font-bold">
                                OUTFIX OF THE DAY
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-x-[30px] pb-[40px]">
                            <img
                                className={`duration-[800ms] ${isViewImg ? 'translate-x-0 opacity-1' : 'translate-x-[-80px] opacity-0'}`}
                                ref={refImg}
                                src={bgImg1}
                                alt="err"
                            />
                            <img
                                className={`duration-[800ms] ${isViewImg ? 'translate-y-0 opacity-1' : 'translate-y-[-80px] opacity-0'}`}
                                ref={refImg}
                                src={bgImg2}
                                alt="err"
                            />
                            <img
                                className={`duration-[800ms] ${isViewImg ? 'translate-x-0 opacity-1' : 'translate-x-[80px] opacity-0'}`}
                                ref={refImg}
                                src={bgImg3}
                                alt="err"
                            />
                        </div>
                    </div>
                </div>
                {/* {Bottoms} */}
                <div className="mx-0 sm:mx-[30px] md:mx-[6rem] lg:mx-[6rem] xl:mx-[10rem] ">
                    <TitleProduct path={"/quan-nam"} title={"Bottoms"} />
                    <ShowProduct productList={bottoms} />
                    <div className="my-[20px] p-[50px] flex justify-center">
                        <Link to={'/quan-nam'}>
                            <button
                                className=" px-[20px] py-[10px] h-auto bg-red text-white font-bold rounded-[4px] mr-[10px] hover:opacity-80"
                            >
                                <span>Xem tất cả</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
    );
}

export default Shop;