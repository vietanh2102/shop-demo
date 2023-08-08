import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
function Body() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const api = 'https://yymyxn-8080.csb.app/data'
    useEffect(()=>{
        const getData = async () => {
            setLoading(true)
            const res = await fetch(`https://yymyxn-8080.csb.app/data`);
            const data = await res.json();
            setData(data);
            setLoading(false)
        }
        getData()
    },[])
    return (
        <>
            <div className="flex">
                <div className="border-r w-[5%] text-center py-[5px]">
                    ID
                </div>
                <div className="border-r w-[15%] text-center py-[5px]">Họ tên</div>
                <div className="border-r w-[15%] text-center py-[5px]">SĐT</div>
                <div className="border-r w-[15%] text-center py-[5px]">Email</div>
                <div className="border-r w-[20%] text-center py-[5px]">Địa chỉ</div>
                <div className="border-r w-[20%] text-center py-[5px]">Sản phẩm-Số lượng</div>
                <div className="border-r w-[10%] text-center py-[5px]">Giá</div>
            </div>
            {data.map(item => (
                <div key={item.id} className="flex">
                    <div className="border bg-[#fafafa] pl-[10px] w-[5%] text-left py-[5px]">
                        0{item.id}
                    </div>
                    <div className="border bg-[#fafafa] pl-[10px] w-[15%] text-left py-[5px]">
                        {item.name}
                    </div>
                    <div className="border bg-[#fafafa] pl-[10px] w-[15%] text-left py-[5px]">
                        {item.phone}
                    </div>
                    <div className="border bg-[#fafafa] pl-[10px] w-[15%] text-left py-[5px]">
                        {item.email}
                    </div>
                    <div className="border bg-[#fafafa] pl-[10px] w-[20%] text-left py-[5px]">
                        {item.address}
                    </div>
                    <div className="border bg-[#fafafa] pl-[10px] w-[20%] text-left py-[5px] inline-block">
                        {item.cart.map(item => (
                            <h1 key={item.id} className="py-[5px]">
                                {item.title}x{item.quatity}
                            </h1>
                        ))}
                    </div>
                    <div className="border bg-[#fafafa] pl-[10px] w-[10%] text-left py-[5px]">
                        <h1 key={item.id}>{item.totalCost.toLocaleString()}đ</h1>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Body;