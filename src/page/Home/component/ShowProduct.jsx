import Product from "../../../component/ProductComponent/ProductComponent";
import { useEffect, useRef, useState } from "react";
import { IsIntoView } from "../../../hooks/useShow";

function ShowProduct({ productList }) {
    const ref = useRef(null)
    const [isViewProduct, setIsViewProduct] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            IsIntoView(ref, setIsViewProduct)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div
            ref={ref}
            className={`w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[30px] mx-auto `}
        >
            {
                productList.map((item) => {
                    return (
                        <div
                            className={`duration-[800ms] ${isViewProduct ? 'opacity-1 translate-y-0 w-full h-full' : 'opacity-0 translate-y-[80px]'}`}
                            key={item.id}
                        >
                            <Product products={item} />
                        </div>

                    )
                })
            }
        </div>
    );
}

export default ShowProduct;