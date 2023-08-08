import React, { useContext } from "react";
import { Link } from 'react-router-dom';

function BillItem({ item }) {
    return (
        <div className="w-full">
            <div className=" grid grid-cols-12 text-center my-[10px] border-b border-inherit w-full">
                <div className="col-span-9 md:flex text-left p-[5px]">
                    <div className="max-w-[100px]">
                        <Link to={`/product/${item.id}`}>
                            <img src={item.image} alt="err" />
                        </Link>
                    </div>
                    <div className="ml-[5px]">
                        <Link to={`/product/${item.id}`}>
                            <h1 className="hover:underline">{item.title}</h1>
                            <h1>Số lượng: {item.quatity}</h1>
                        </Link>
                    </div>
                </div>
                <div className=" col-span-3 py-[8px]">
                    {Number(item.quatity * item.price).toLocaleString()}đ
                </div>
            </div>
        </div>
    );
}

export default BillItem;