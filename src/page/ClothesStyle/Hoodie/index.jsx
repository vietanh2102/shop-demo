import FilterProduct from "../../../component/FilterProduct";
import img1 from "../../../assets/imgTop.jpg"
import filterimg from "../../../assets/svg/filter.svg"
import { useContext, useEffect,useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import Product from "../../../component/produc/ProductComponent";
import Loading from "../../../component/Loading";
import ResultFilterTypeProduct from "../../../component/ResultFilter/ResultFilterTypeProduct";
import FilterResponsive from "../../../component/Responsive/FilterResponsive";
import { Pagination } from "@mui/material";

function Hoodie() {
    useEffect( () => {
        setShowFilter(false)
    },[])
    const {showFilter,products,loading,setShowFilter} = useContext(ProductContext)
    //Pagination
    const {pagination,handleChangePage,pageSize} = useContext(ProductContext)
    const hoodieTotal = products.filter(item => item.detail === 'hoodie')
    const hoodie = hoodieTotal.slice(pagination.to,pagination.from)
    const [show,setShow] = useState(false)
    const handleClick = () =>{
        setShow(!show)
    }
    return (
        loading ? <Loading /> : 
        <div>
            <div className="w-full">
                <img src={img1} alt="err" />
            </div>
            <div className="flex  mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[6rem] xl:mx-[10rem] pt-[71.16px] h-full">
                <div className="hidden lg:flex w-[300px] h-full">
                    <FilterProduct />
                </div>
                <div className="w-full">
                    <h1 className="font-bold text-[20px]">Hoodie</h1>
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
                    <FilterResponsive state={{show,setShow,handleClick}} />
                    {/* {showProduct} */}
                    {showFilter ? <ResultFilterTypeProduct detail='hoodie'  /> : 
                        <div className=" w-full grid grid-cols-2 md:grid-cols-4  xl:grid-cols-4 gap-[30px] my-[15px]">
                            {
                                hoodie.map(item => (
                                    <Product key={item.id} products={item} />
                                ))
                            }
                        </div>
                    }
                    <div className={showFilter ? "hidden" : "text-sm my-[20px] flex justify-end"}>
                        <Pagination 
                            count={Math.ceil(hoodieTotal.length / pageSize)}
                            onChange={handleChangePage}
                            color="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hoodie;