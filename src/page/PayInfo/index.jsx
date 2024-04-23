import { TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import BillItem from "../../component/BillItem";
import { Link } from "react-router-dom";
import Input from "./component/input";

function PayInfo() {
    const { cart, totalCost, itemAmount } = useContext(CartContext)
    const [formData, setFormData] = useState({
        name: undefined,
        phone: undefined,
        email: undefined,
        address: undefined,
    })
    const handleChangeName = e => {
        const name = e.target.value
        if (!name.startsWith(' ')) {
            setFormData({ ...formData, name: name })
        }
    }
    const handleChangePhone = e => {
        const phone = e.target.value
        if (!phone.startsWith(' ')) {
            setFormData({ ...formData, phone: phone })
        }
    }
    const handleChangeEmail = e => {
        const email = e.target.value
        if (!email.startsWith(' ')) {
            setFormData({ ...formData, email: email })
        }
    }
    const handleChangeAddress = e => {
        const address = e.target.value
        if (!address.startsWith(' ')) {
            setFormData({ ...formData, address: address })
        }
    }
    const api = "https://yymyxn-8080.csb.app/data"
    const postData = (data, callback) => {
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        fetch(api, option)
            .then(res => res.json())
            .then(callback)
    }
    const handleClick = () => {
        const { name, phone, email, address } = formData
        if (name && phone && email && address) {
            if (itemAmount !== 0) {
                postData(formData)
                alert('Đặt hàng thành công')
            } else {
                alert('Quý Khách vui lòng chọn sản phẩm cần mua')
            }
        } else {
            alert('Quý khách vui long điền đầy đủ thông tin')
        }
        setFormData({
            name: undefined,
            phone: undefined,
            email: undefined,
            address: undefined,
        })
    }
    return (
        <div className="h-full lg:grid lg:grid-cols-3">
            <div className="col-span-2 lg:pr-[100px] lg:border-r py-[50px]">
                <span className=" font-bold px-[30px]">Thông tin nhận hàng</span>
                <Input lable="Họ tên" value={formData.name} handleChange={handleChangeName} />
                <Input lable="SDT" value={formData.phone} handleChange={handleChangePhone} />
                <Input lable="Email" value={formData.email} handleChange={handleChangeEmail} />
                <Input lable="Địa chỉ" value={formData.address} handleChange={handleChangeAddress} />
            </div>
            <div className=" bg-[#fafafa]  lg:mx-0 w-full lg:py-[50px] py-[20px]">
                <span className=" font-bold text-xl p-[30px]">
                    Đơn hàng({itemAmount} sản phẩm)
                </span>
                {cart.map(item => {
                    return (
                        <BillItem key={item.id} item={item} />
                    )
                })}
                <div className="h-[50px] mx-[40px] font-bold py-[10px] border-y flex justify-center mb-[20px]">
                    <span>
                        Tổng cộng: {Number(totalCost).toLocaleString()}đ
                    </span>
                </div>
                <div className="flex justify-center w-full">
                    <button
                        className="w-[40%] h-[40px] bg-red text-white font-bold rounded-[4px] mr-[10px] hover:opacity-90"
                        onClick={handleClick}
                    >
                        Đặt hàng
                    </button>
                    <button
                        className="w-[40%] h-[40px] bg-red text-white font-bold rounded-[4px] mr-[10px] hover:opacity-90"
                    >
                        <Link to={'/pay'}>
                            <h1 className="w-full h-full p-[9px]">
                                Giỏ hàng
                            </h1>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PayInfo;