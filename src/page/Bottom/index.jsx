import React, { useContext, useEffect,useState } from "react";
import Pagination from '@mui/material/Pagination';

import Product from "../../component/produc/ProductComponent";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../component/Loading";
import FilterProduct from "../../component/FilterProduct";
import ResultFilter from "../../component/ResultFilter/ResultFilterProduct";
import img1 from "../../assets/imgTop.jpg"
import filterimg from "../../assets/svg/filter.svg"
import FilterResponsive from "../../component/Responsive/FilterResponsive";


function Bottoms() {
    useEffect(() =>{
        setShowFilter(false)
    },[] )
    const {loading,products,showFilter,setShowFilter} = useContext(ProductContext)
    //Pagination
    const pageSize = 8
    const [pagination,setPagination] = useState({
        to:0,
        from:8
    })
    const handleChangePage = (e,page=1) => {
        const to = (page - 1) * pageSize
        const from = (page - 1) * pageSize + pageSize
        setPagination({...pagination,to:to,from:from})
    }
    const menClothingBottomsTotal =  products.filter( (item) => item.category === "bottoms")
    const menClothingBottoms = menClothingBottomsTotal.slice(pagination.to,pagination.from)
    const [show,setShow] = useState(false)
    const handleClick = () =>{
        setShow(!show)
    }
    
    return (
        loading ? <Loading /> :
            <div>
                <div>
                    <img src={img1} alt="err" />
                </div>
                <div className="flex  mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[6rem] xl:mx-[10rem] pt-[71.16px] h-full">
                    <div className="hidden lg:flex w-[300px] h-full">
                            <FilterProduct />
                    </div>
                    <div className="w-full  ">
                        <h1 className=" font-bold text-[20px]">Quần nam</h1>
                        <div 
                            className="py-[5px] px-[12px] border rounded-[7px] cursor-pointer lg:hidden" 
                            onClick={() =>handleClick()}
                        >
                            <div className="flex items-center justify-center h-[20px]">
                                <h1 className=" text-[13px] mr-[7px] text-text">Bộ lọc</h1>
                                <img src={filterimg} alt="erro" />
                            </div>
                        </div>
                    {/* {FilterResponsive} */}
                        <FilterResponsive state={{show,setShow,handleClick}} />
                    {/* {showproducts} */}
                        {showFilter ? <ResultFilter category="bottoms" /> :
                            <div className=" w-full grid grid-cols-2 md:grid-cols-4  xl:grid-cols-4 gap-[30px] my-[15px] ">
                                {menClothingBottoms.map( item => {
                                    return(
                                        <Product key={item.id} products={item} />
                                    )
                                })}
                            </div>
                        }
                        <div 
                            className={showFilter ? "hidden" : "text-sm my-[20px] flex justify-end"}
                        >
                            <Pagination 
                                count={Math.ceil(menClothingBottomsTotal.length/pageSize)}
                                color="primary"
                                onChange={handleChangePage}
                            />
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Bottoms;