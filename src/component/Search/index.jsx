import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../produc/ProductComponent';

function Search() {
    const { searchValue } = useParams()
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://hpvggl-8080.csb.app/products?q=${searchValue}`);
            const data = await res.json();
            setProduct(data);
            setLoading(false)
        }
        getProduct()
    },[searchValue])
    return ( 
        <div className='mx-0 sm:mx-[30px] md:mx-[8rem] lg:mx-[18rem] py-[30px]'>
            <h1>Kết quả tìm kiếm với từ khóa "{searchValue}":</h1>
            <div className="">
                <div className=" w-auto grid grid-cols-2 md:grid-cols-2  xl:grid-cols-4 gap-[30px]">
                    {product.map( item => {
                        return(
                            <Product key={item.id} products={item} />
                        )
                    })}
                </div>
            </div>
            
        </div>
     );
}

export default Search;