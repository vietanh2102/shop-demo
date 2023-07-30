import { createContext,useEffect,useState } from "react";
import React from "react";

export const ProductContext = createContext()
function ProductProvider( { children }) {
    // state Product
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    // Fetch product
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://hpvggl-8080.csb.app/products`);
            const data = await res.json();
            setProducts(data);
            setLoading(false)
        }
        getProduct()
    },[])
    //filterPrice
        const priceArr = [ 
            {
                id:0,
                title:"---",
                value: 999999999
            },
            {
                id: 1,
                title: 'Dưới 200.000',
                value:200000
            },
            {
                id: 2,
                title: 'Dưới 500.000',
                value:500000
            },
            {
                id: 3,
                title: 'Dưới 1.000.000',
                value:1000000
            },
            {
                id: 4,
                title: 'Dưới 2.000.000',
                value:2000000
            }
        ]
        const [showFilter,setShowFilter] = useState(false)
        const [filterProduct,setFilterProduct] =  useState([])
        const handleClick = (valuePrice) => {
            setShowFilter(true)
            if(valuePrice){
                const filterProduct = products.filter( item => {
                        if(item.price < valuePrice){
                            return true
                        }
                    }
                )
                setFilterProduct(filterProduct)
            }else{
                setShowFilter(false)
            }

        }
    return ( 
        <ProductContext.Provider value={{products,
            loading,
            handleClick,priceArr,
            filterProduct,setFilterProduct,
            showFilter,setShowFilter,
            }}>
            {children}
        </ProductContext.Provider>
     );
}

export default ProductProvider;