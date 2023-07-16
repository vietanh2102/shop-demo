import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import search from '../../assets/search.svg'

function HeaderResponsiv( {state}) {
    const {bar,setBar} = state
    const [searchValue,setSearchValue] = useState('')
    //input
    const handleChange = (e) =>{
    const searchValue = e.target.value;
    if(!searchValue.startsWith(' ')){
        return setSearchValue(searchValue)
    }
    }
    //click
    const handleClick = ()=>{
        setSearchValue('')
    }
    return ( 
        <div className=' basis-1/4 flex items-center order-3 lg:hidden px-[15px]'>
            <div className=' absolute right-[15px] z-10' onClick={() => setBar(!bar)}>
                {bar ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </div>

            <div className={bar ? 'w-full h-full bg-[#f1f1f1] fixed right-0 top-0 ease-in-out duration-500' : 'fixed right-[-100%]'}>
                <div className='grid grid-cols-1  text-[14px] font-sans font-bold pt-[100px]  '>
                    <div className='flex relative h-[50px] m-[20px] justify-center rounded-[10px] bg-white border shadow '>
                        <input
                         placeholder='Tìm kiếm sản phẩm'
                         className=' rounded-[10px] outline-none absolute left-[10px] top-0 bottom-0 '
                         onChange={handleChange}
                         value={searchValue}
                         />
                        <button onClick={handleClick} className=' absolute right-[10px] top-0 bottom-0'>
                            <Link to={`/tim-kiem/${searchValue}`} onClick={() => setBar(!bar)}>
                                <img src={search} alt='err' />
                            </Link>
                        </button>
                    </div>
                    <Link to={'/'}>
                        <div className='h-[50px] w-full text-center' onClick={() => setBar(!bar)}>
                            Home
                        </div>
                    </Link>
                    <Link to={'/ao-nam'}>
                        <div className='h-[50px] w-full text-center' onClick={() => setBar(!bar)}>
                            Áo Nam
                        </div>
                    </Link>
                    <Link to={'/quan-nam'}>
                        <div className='h-[50px] w-full text-center' onClick={() => setBar(!bar)}>
                            Quần Nam
                        </div>
                    </Link>
                    <Link to={'/he-thong-cua-hang'}>
                        <div className='h-[50px] w-full text-center' onClick={() => setBar(!bar)}>
                            Hệ thong cửa hàng
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default HeaderResponsiv;