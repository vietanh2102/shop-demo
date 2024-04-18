import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CartContext } from "../../Context/CartContext";
import { ProductContext } from "../../Context/ProductContext";
import sizeImg from "../../assets/img/size.webp"
import { Link } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import SliceImg from "../../component/Slide/SliceImg";
function Product() {
    const { id } = useParams()
    const { addItem, cart, itemAmount } = useContext(CartContext)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://zrnvxy-8080.csb.app/products/${id}`);
            const data = await res.json();
            setProduct(data);
            setLoading(false)
        }
        getProduct()
    }, [])
    const { size, image } = product

    const [sizeInput, setSizeInput] = useState('')
    const handleChangeInputSize = (e) => {
        setSizeInput(e.target.value)
    }
    const handleClickBuy = (id, product, sizeInput) => {
        if (sizeInput === '') {
            alert('Vui Lòng chọn Size')
        } else {
            if (itemAmount === 0) {
                addItem(id, product, sizeInput)
            }
        }
    }
    const handleAddItem = (id, product, sizeInput) => {
        if (sizeInput === '') {
            alert('Vui Lòng chọn Size')
        } else {
            addItem(id, product, sizeInput)
        }
    }
    const price = Number(product.price)
    const Show = () => {
        return (
            <div className="w-full py-[50px] px-[30px] md:px-[8.33%] ">
                <h1 className="w-[100px] text-center h-[25px] my-[10px] bg-black text-white">New Arrival</h1>
                <div className="w-full mx-auto inline-block lg:flex">
                    <div className="w-full lg:w-2/3">
                        <SliceImg image={image} />
                    </div>
                    {/* {detail} */}
                    <div className="text-center relative lg:w-1/4">
                        <div className=" font-bold">{product.title}</div>
                        <div className="">{price.toLocaleString()}đ</div>
                        {/* {size} */}
                        <div className="w-full mt-[30px]">
                            <h1 className=" font-bold text-left mb-[5px]">Size:</h1>
                            <div className="flex">
                                <ToggleButtonGroup
                                    color="warning"
                                    value={sizeInput}
                                    exclusive
                                    onChange={handleChangeInputSize}
                                >
                                    {size && size.map(item => (
                                        <ToggleButton
                                            value={item}
                                            style={{ paddingLeft: 25, paddingRight: 25 }}
                                            key={item}
                                        >
                                            {item}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        {/* {button} */}
                        <div
                            className="w-full h-[44px] mt-[30px] border border-[#333] rounded-[3px] bg-white flex justify-center items-center cursor-pointer"
                            onClick={() => handleAddItem(product.id, product, sizeInput)}
                        >
                            <button>
                                Thêm vào giỏ
                            </button>
                        </div>
                        <Link to={sizeInput && '/pay'}>
                            <div
                                className="w-full h-[44px] mt-[5px] border border-black bg-[#333] rounded-[3px] text-white flex justify-center items-center cursor-pointer hover:opacity-90"
                                onClick={() => handleClickBuy(product.id, product, sizeInput)}
                            >
                                <button>
                                    Mua ngay
                                </button>
                            </div>
                        </Link>
                        <div className="  ">
                            <h1 className=" font-bold text-left">Size chart:</h1>
                            <img className="lg:w-full" src={sizeImg} alt="err" />
                        </div>
                    </div>
                </div>
                {/* {san pham lien quan} */}
            </div>
        )
    }
    const Loading = () => {
        return (
            <div className="  mx-[200px]">
                <div className="my-[50px] grid grid-cols-3">
                    <div className="col-span-1  h-[500px] " style={{ lineHeight: 2 }}>
                        <Skeleton height={500} />
                    </div>
                    <div className="col-span-2 mx-[50px]">
                        <Skeleton height={500} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        loading ? <Loading /> : <Show />
    );
}

export default Product;