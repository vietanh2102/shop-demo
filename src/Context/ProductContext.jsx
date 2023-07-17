import { createContext,useEffect,useState } from "react";
import React from "react";

export const ProductContext = createContext()
function ProductProvider( { children }) {
    // state Product
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    //Filter
    const [type,setType] = useState(false)
    const [price,setPrice] = useState(false)
    const [filterProduct,setFilterProduct] = useState(products)
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
    const handleClick = ({detail,priceFilter}) =>{
        const top = products.filter(item => item.category === 'top')
        if(detail){
            const filter = top.filter( item => item.detail === detail)
            setFilterProduct(filter)
            setPrice(false)
        }
        if(price){
            const filter = top.filter(item => item.price < priceFilter)
            setFilterProduct(filter)
            setType(false)
        }
    }
    return ( 
        <ProductContext.Provider value={{products,
            loading,
            handleClick,
            filterProduct,
            type,setType,
            price,setPrice}}>
            {children}
        </ProductContext.Provider>
     );
}

export default ProductProvider;