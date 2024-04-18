import { createContext, useEffect, useState } from "react";
import React from "react";
import { toTopPage } from "../hooks/scrollTop";

export const ProductContext = createContext()
function ProductProvider({ children }) {
    // state Product
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    // Fetch product
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://zrnvxy-8080.csb.app/products`);
            const data = await res.json();
            setProducts(data);
            setLoading(false)
        }
        getProduct()
    }, [])
    //filterPrice
    const [showFilter, setShowFilter] = useState(false)
    const [filterProduct, setFilterProduct] = useState([])
    const handleClick = (value) => {
        const { priceValue, size, color } = value
        setShowFilter(true)
        if (priceValue || size || color) {
            let filterList = []
            if (priceValue) {
                if (filterList.length === 0) {
                    filterList = products.filter(item => item.price < priceValue)
                    setFilterProduct(filterList)
                } else {
                    filterList = filterList.filter(item => item.price < priceValue)
                    setFilterProduct(filterList)
                }
            }
            if (size) {
                if (filterList.length === 0) {
                    filterList = products.filter(item => item.size.includes(size))
                    setFilterProduct(filterList)
                } else {
                    filterList = filterList.filter(item => item.size.includes(size))
                    setFilterProduct(filterList)
                }
            }
            if (color) {
                if (filterList.length === 0) {
                    filterList = products.filter(item => item.color === color)
                    setFilterProduct(filterList)
                } else {
                    filterList = filterList.filter(item => item.color === color)
                    setFilterProduct(filterList)
                }
            }
        } else {
            setShowFilter(false)
        }
    }
    // Pagination
    const pageSize = 8
    const [pagination, setPagination] = useState({
        to: 0,
        from: 8
    })
    const handleChangePage = (e, page = 1,) => {
        const to = (page - 1) * pageSize
        const from = (page - 1) * pageSize + pageSize
        setPagination({ ...pagination, to: to, from: from })
    }
    return (
        <ProductContext.Provider value={{
            products,
            loading,
            handleClick,
            filterProduct, setFilterProduct,
            showFilter, setShowFilter,
            pageSize, handleChangePage, pagination, setPagination
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
