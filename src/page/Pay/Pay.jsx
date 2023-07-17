import React,{useContext,useEffect,useState} from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../component/CartItem";
import { Link } from "react-router-dom";
function Pay() {
    const { cart,totalCost } = useContext(CartContext)

    return ( 
        <div className=" mx-0 sm:mx-[5px] md:mx-[4rem] lg-mx-[10rem]">
            <div className="pt-[30px]">
                <h2 className=" font-bold text-6xl">Giỏ Hàng</h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="border border-inherit  col-span-2  mt-[30px]">
                    <div className="grid grid-cols-12 border-y border-inherit text-center text-[14px] h-[40px] pt-[10px]">
                        <div className=" col-span-5">Sản Phẩm</div>
                        <div className=" col-span-3">Số Lượng</div>
                        <div className=" col-span-3">Tổng Tiền</div>
                        <div>Xóa</div>
                    </div>
                    {cart.map( item => {
                        return(
                            <CartItem key={item.id} item={item} />
                        )
                    })}
                </div>


                <div className=" h-[150px] border border-inherit my-[30px] lg:mx-[10px]">
                    <div className="flex items-center relative border border-inherit h-[50px]">
                        <div className="ml-[20px]">Tổng Tiền</div>
                        <div className=" absolute right-[10px]">{Number(totalCost).toLocaleString()}đ</div>
                    </div>
                    <div className='flex justify-center py-[25px]'>
                        <button className="w-[150px] h-[50px]  border-solid bg-slate-800 text-white rounded-full hover:bg-white hover:text-black">Thanh Toán</button>
                    </div>
                </div>
            </div>
            <div>
                <Link to={'/'}>
                    <button className="w-full md:w-auto h-[60px] mb-[40px] lg:mt-[30px] px-[50px] border-solid bg-slate-800 text-white rounded-full  hover:bg-white hover:text-black">
                        Tiếp tục mua sắm
                    </button>
                </Link>
            </div>
        </div>
     );
}

export default Pay;