import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { ProductContext } from '../../Context/ProductContext';

function FilterProduct() {
    const {priceArr,handleClick} = useContext(ProductContext)
    const [filterTop,setFilterTop] =useState(false)
    const [filterBottom,setFilterBottom] =useState(false)

    return ( 
        <div className=" p-[20px] font-bold ml-[20px] lg:ml-0  ">
            <h1 className=' font-bold text-[20px] hidden lg:inline-block'>Bộ Lọc:</h1>
            <div className=' hidden lg:inline-block'>
                <h1 className=' font-bold'>Danh mục sản phẩm:</h1>
                <Link><h1 className=' my-[5px] ml-[10px]'>Sale</h1></Link>
                <div className=' my-[5px] ml-[10px]'>
                    <div className='z-10 bg-white'>
                        <button 
                            onClick={() => setFilterTop(!filterTop)}
                            className='flex items-center'
                        >
                            <h1 className='mr-[10px]'>Áo nam</h1>
                            {filterTop ? <FontAwesomeIcon icon={faAngleUp} size='sm' />:<FontAwesomeIcon icon={faAngleDown} size='sm' />}
                        </button>
                    </div>
                    <div className={filterTop ? "pl-[10px]" : " hidden"}>
                        <Link to={"/ao-polo"}><h1>Áo Polo</h1></Link>
                        <Link to={"/tee"}><h1>Tee</h1></Link>
                        <Link to={"/hoodie"}><h1>Hoodie</h1></Link>
                    </div>
               </div>
               {/* {Quan nam} */}
                <div className=' my-[5px] ml-[10px]'>
                    <div>
                        <button 
                            onClick={() => setFilterBottom(!filterBottom)}
                            className='flex items-center'
                        >
                            <h1 className='mr-[10px]'>Quần nam</h1>
                            {filterBottom ? <FontAwesomeIcon icon={faAngleUp} size='sm' />:<FontAwesomeIcon icon={faAngleDown} size='sm' />}
                        </button>
                    </div>
                    <div className={filterBottom ? "pl-[10px]" : " hidden"}>
                        <Link to={"/quan-dai"}><h1>Quần dài</h1></Link>
                        <Link to={"/quan-short"}><h1>Quần short</h1></Link>
                    </div>
                </div>
                <h1 className=' my-[5px] ml-[10px]'>Hệ thống cửa Hàng</h1>
            </div>
            <div>
                <label htmlFor=''>Giá:</label>
                <select 
                    onChange={e => handleClick(e.target.value)}
                    className='ml-[5px] border text-center p-[5px] outline-none'
                >
                    {priceArr.map(item => (
                        <option key={item.id} value={item.value}>{item.title}</option>
                    ))}
                </select>
            </div>
        </div>
     );
}

export default FilterProduct;