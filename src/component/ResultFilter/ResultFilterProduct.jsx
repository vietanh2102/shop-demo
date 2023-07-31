import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Product from "../produc/ProductComponent";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

function ResultFilter({category}) {
    const {filterProduct} = useContext(ProductContext)
    //Pagination
    const pageSize = 8
    const [pagination,setPagination] = useState({
        to: 0,
        from: pageSize
    })
    const handleChangePage = (e,page) => {
        const to = (page - 1 ) * pageSize
        const from = (page - 1) * pageSize + pageSize
        setPagination({...pagination,to:to,from:from})
    }
    const filterProductTotal =filterProduct.filter(item => item.category === category)
    const filter = filterProductTotal.slice(pagination.to,pagination.from)
    return ( 
        <div>
            {filter.length === 0 ? 
                <h1 className=" text-center my-[30px]">Không có sản phẩm nào</h1> :
                <div>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4  xl:grid-cols-4 gap-[30px] my-[15px]">
                        {filter.map(item => (
                            <Product key={item.id} products={item} />
                        ))}
                    </div>
                    <div className="text-sm my-[20px] flex justify-end" >
                        <Pagination 
                            count={Math.ceil(filterProductTotal.length/8)}
                            color="primary"
                            onChange={handleChangePage}
                        />
                    </div>
                </div>
            }
        </div>
     );
}

export default ResultFilter;