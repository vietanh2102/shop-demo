import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark,faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import search from '../../assets/search.svg'

function HeaderResponsive( {state}) {
    const {bar,setBar} = state
    const [searchValue,setSearchValue] = useState('')
    const [filterTop,setFilterTop] = useState(false)
    const [filterBottoms,setFilterBottoms] = useState(false)
    //input
    const handleChange = (e) =>{
    const searchValue = e.target.value;
    if(!searchValue.startsWith(' ')){
        return setSearchValue(searchValue)
    }
    }
    //click
    const handleClickSearch = ()=>{
        setSearchValue('')
    }
    const handleClickItem = () =>{
        setBar(!bar)
        setFilterBottoms(false)
        setFilterTop(false)
    }
    return ( 
        <div className=' basis-1/4 flex items-center order-3 lg:hidden px-[15px] overflow-y-hidden'>
            <div className=' absolute right-[15px] z-10' onClick={handleClickItem}>
                {bar ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </div>

            <div className={bar ? 'w-full h-full bg-[#f1f1f1] fixed right-0 top-0 ease-in-out duration-500' : 'fixed right-[-100%]'}>
                <div className='grid grid-cols-1  text-[18px] font-sans font-bold pt-[100px]  '>
                    <div className='flex relative h-[50px] m-[20px] justify-center rounded-[10px] bg-white border shadow '>
                        <input
                         placeholder='Tìm kiếm sản phẩm'
                         className=' rounded-[10px] outline-none absolute left-[10px] top-0 bottom-0 '
                         onChange={handleChange}
                         value={searchValue}
                         />
                        <button onClick={handleClickSearch} className=' absolute right-[10px] top-0 bottom-0'>
                            <Link to={`/tim-kiem/${searchValue}`} onClick={() => setBar(!bar)}>
                                <img src={search} alt='err' />
                            </Link>
                        </button>
                    </div>
                    <div className='py-[10px] w-full mx-[20px]' onClick={() => setBar(!bar)}>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </div>
                    <div className=' py-[10px] h-auto w-full mx-[20px]' >
                        <div className='flex items-center relative'>
                            <Link to={'/ao-nam'}>
                                <h1 onClick={() => setBar(!bar)}>Áo Nam</h1>
                            </Link>
                            <span className=' absolute right-20' onClick={() => setFilterTop(!filterTop)}>
                                {filterTop ? <FontAwesomeIcon icon={faAngleUp} /> : 
                                    <FontAwesomeIcon icon={faAngleDown} />}
                            </span>
                           
                        </div>
                        <div className={filterTop ? " pl-[10px]" : " hidden"} onClick={() => setBar(!bar)}>
                            <Link to={"/ao-polo"}><h1>Áo Polo</h1></Link>
                            <Link to={"/tee"}><h1>Tee</h1></Link>
                            <Link to={"/hoodie"}><h1>Hoodie</h1></Link>
                        </div>
                    </div>
                    <div className='py-[10px] w-full mx-[20px]'>
                        <div className='flex items-center relative'>
                            <Link to={'/quan-nam'}>
                                <h1 onClick={() => setBar(!bar)}>Quần nam</h1>
                            </Link>
                            <span className=' absolute right-20' onClick={() => setFilterBottoms(!filterBottoms)}>
                                {filterBottoms ? <FontAwesomeIcon icon={faAngleUp} /> : 
                                    <FontAwesomeIcon icon={faAngleDown} />}
                            </span>                           
                        </div>
                        <div className={filterBottoms ? "pl-[10px]" : " hidden"} onClick={() => setBar(!bar)}>
                            <Link to={"/quan-dai"}><h1>Quần dài</h1></Link>
                            <Link to={"/quan-short"}><h1>Quần short</h1></Link>
                        </div>
                    </div>
                    <div className='py-[10px] w-full mx-[20px]' >
                        <Link to={'/he-thong-cua-hang'}>
                            <h1 onClick={() => setBar(!bar)}>Hệ thống cửa hàng</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HeaderResponsive;