import FilterProduct from "../../../component/FilterProduct";
import { Pagination } from "@mui/material";

import img1 from "../../../assets/imgTop.jpg"
import filterimg from "../../../assets/svg/filter.svg"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import Product from "../../../component/ProductComponent/ProductComponent";
import Loading from "../../../component/Loading";
import ResultFilterTypeProduct from "../../../component/ResultFilter/ResultFilterTypeProduct";
import FilterResponsive from "../../../component/Responsive/FilterResponsive";

function Polo() {
    useEffect(() => {
        setShowFilter(false)
    }, [])
    const { showFilter, products, loading, setShowFilter } = useContext(ProductContext)
    //Pagination
    const pageSize = 8
    const [pagination, setPagination] = useState({
        to: 0,
        from: 8
    })
    const handleChangePage = (e, page = 1) => {
        const to = (page - 1) * pageSize
        const from = (page - 1) * pageSize + pageSize
        setPagination({ ...pagination, to: to, from: from })
    }
    const poloTotal = products.filter(item => item.detail === 'POLO')
    const polo = poloTotal.slice(pagination.to, pagination.from)
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    return (
        loading ? <Loading /> :
            <div>
                <div className="w-full">
                    <img src={img1} alt="err" />
                </div>
                <div className="flex  mx-0 sm:mx-[30px] md:mx-[4rem] lg:mx-[30px]">
                    <div className="hidden lg:flex w-[300px] h-100vh">
                        <FilterProduct />
                    </div>
                    <div className="w-full  lg:mx-[30px] pt-[71.16px] ">
                        <h1 className="font-bold text-[20px]">Polo</h1>
                        <div
                            className="py-[5px] px-[12px] border rounded-[7px] cursor-pointer lg:hidden"
                            onClick={() => handleClick()}
                        >
                            <div className="flex items-center justify-center h-[20px]">
                                <h1 className=" text-[13px] mr-[7px] text-text">Bộ lọc</h1>
                                <img src={filterimg} alt="erro" />
                            </div>
                        </div>
                        {/* {FilterResponsive} */}
                        <FilterResponsive state={{ show, setShow, handleClick }} />
                        {/* {showProduct} */}
                        {showFilter ? <ResultFilterTypeProduct detail='POLO' /> :
                            <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[10px] md:gap-[30px] my-[15px]">
                                {
                                    polo.map(item => (
                                        <Product key={item.id} products={item} />
                                    ))
                                }
                            </div>
                        }
                        <div className={showFilter ? "hidden" : "text-sm my-[20px] flex justify-end"}>
                            <Pagination
                                count={Math.ceil(poloTotal.length / pageSize)}
                                onChange={handleChangePage}
                                color="primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Polo;