import { useState } from "react";
import filterimg from "../../assets/svg/filter.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import FilterProduct from "../FilterProduct";


function FilterResponsive( {state} ) {
    const {show,setshow,handleClick} = state
    return ( 
        <div>
            {/* {conten} */}
            <div className={show ? 'w-full h-full bg-white fixed left-0 top-0 ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
                {/* {header} */}
                <div 
                    className="h-[60px] w-full p-[12px] flex items-center relative border-b" 
                    onClick={() => handleClick()}
                >
                    <h1 className=" absolute left-12 font-bold text-[22px]">Bộ lọc</h1>
                    <FontAwesomeIcon icon={faXmark} size="xl" className=" absolute right-12" />
                </div>
                {/* {filter} */}
                <div>
                    <FilterProduct />
                </div>
                {/* {footer} */}
                <div className=" flex p-[12px] w-full border-t absolute bottom-0">
                    <button 
                        className="w-[40%] h-[40px] border bg-[#f1f1f1]"
                        onClick={() => handleClick()}
                    >
                        Hủy
                    </button>
                    <button
                        className=" absolute right-[12px] w-[40%] h-[40px] bg-text text-[#ffffff] border"
                        onClick={() => handleClick()}
                    >
                        Áp dụng
                    </button>
                </div>
            </div>
        </div>
     );
}

export default FilterResponsive