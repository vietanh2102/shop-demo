import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Product from "../produc/ProductComponent";
import { Link } from "react-router-dom";

function ResultFilter({category}) {
    const {filterProduct} = useContext(ProductContext)
    const filter =filterProduct.filter(item => item.category === category) 
    return ( 
        <div>
            {filter.length === 0 ? 
                <h1 className=" text-center my-[30px]">Không có sản phẩm nào</h1> :
                <div className="w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] my-[15px]">
                    {filter.map(item => (
                        <Product key={item.id} products={item} />
                    ))}
                </div>
            }
        </div>
     );
}

export default ResultFilter;