import search from '../../assets/search.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Input() {
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
        <div className='lg:bg-white h-[40px] justify-center rounded-[10px] lg:border lg:shadow hidden lg:flex md:w-[200px]'>
            <input
                 placeholder='Tìm kiếm sản phẩm'
                 className=' rounded-[10px] outline-none w-[150px] '
                 onChange={handleChange}
                 value={searchValue}
             />
            <button 
                className={searchValue ? 'mr-[10px]' : 'hidden'}
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <button onClick={handleClick}>
                <Link to={`/tim-kiem/${searchValue}`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </button>
        </div>
     );
}

export default Input;