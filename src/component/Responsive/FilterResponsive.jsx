import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import FilterProduct from "../FilterProduct";
import { ProductContext } from "../../Context/ProductContext";


function FilterResponsive( {state} ) {
    const {show,setshow} = state
    const handleClickShow =state.handleClick
    const {priceArr,handleClick} = useContext(ProductContext)
    let valuePrice = undefined
    const handleClickApply = () => {
        handleClick(valuePrice)
        handleClickShow()
    }
    return ( 
        <div>
            {/* {conten} */}
            <div className={show ? 'w-full h-full bg-white fixed left-0 top-0 ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
                {/* {header} */}
                <div 
                    className="h-[60px] w-full p-[12px] flex items-center relative border-b" 
                    onClick={() => handleClickShow()}
                >
                    <h1 className=" absolute left-12 font-bold text-[22px]">Bộ lọc</h1>
                    <FontAwesomeIcon icon={faXmark} size="xl" className=" absolute right-12" />
                </div>
                {/* {filter} */}
                <div>
                    <label htmlFor=''>Giá:</label>
                    <select 
                        onChange={e => valuePrice = e.target.value}
                        className='ml-[5px] border text-center p-[5px] outline-none'
                    >
                        {priceArr.map(item => (
                            <option key={item.id} value={item.value}>{item.title}</option>
                        ))}
                    </select>
                </div>
                {/* {footer} */}
                <div className=" flex p-[12px] w-full border-t absolute bottom-0">
                    <button 
                        className="w-[40%] h-[40px] border bg-[#f1f1f1]"
                        onClick={() => handleClickShow()}
                    >
                        Hủy
                    </button>
                    <button
                        className=" absolute right-[12px] w-[40%] h-[40px] bg-text text-[#ffffff] border"
                        onClick={() => handleClickApply()}
                    >
                        Áp dụng
                    </button>
                </div>
            </div>
        </div>
     );
}

export default FilterResponsive