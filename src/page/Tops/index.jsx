import FilterProduct from "../../component/FilterProduct";
import img1 from "../../assets/imgTop.jpg"
import { useContext, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Product from "../../component/produc/ProductComponent";
import ResultFilter from "../../component/ResultFilter";
import Loading from "../../component/Loading";

function tops() {
    const {showFilter,products,loading,setShowFilter} = useContext(ProductContext)
    useEffect( () => {
        setShowFilter(false)
    },[])
    const top = products.filter(item => item.category === 'top')
    return (
        loading ? <Loading /> : 
        <div>
            <div className="w-full">
                <img src={img1} alt="err" />
            </div>
            <div className="flex  mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[10rem] pt-[30px] h-full">
                <div className="hidden lg:flex w-[300px] h-full">
                    <FilterProduct />
                </div>
                <div className="w-full">
                    <h1 className="font-bold text-[20px]">Áo nam</h1>
                    {showFilter ? <ResultFilter category="top" /> : 
                        <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] my-[15px]">
                            {
                                top.map(item => (
                                    <Product key={item.id} products={item} />
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
     );
}

export default tops;