import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { ProductContext } from '../../Context/ProductContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FilterProduct() {
    const {priceArr,handleClick} = useContext(ProductContext)
    const [filterTop,setFilterTop] =useState(false)
    const [filterBottom,setFilterBottom] =useState(false)
    const [priceShow,setPriceShow] = useState('')
    let price
    const handleChange = e =>{
        setPriceShow(e.target.value)
        price = e.target.value
        handleClick(price)
    }

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
                <h1 className='mb-[5px]'>Lọc theo giá sản phẩm:</h1>
                <FormControl sx={{minWidth:120}} size='small'>
                    <InputLabel>Giá</InputLabel>
                        <Select
                            label="Price"
                            value={priceShow}
                            onChange={handleChange}
                            autoWidth
                        >
                            <MenuItem value="">
                                <em>---</em>
                            </MenuItem>
                            <MenuItem value={200000}>Dưới 200.000</MenuItem>
                            <MenuItem value={500000}>Dưới 500.000</MenuItem>
                            <MenuItem value={1000000}>Dưới 1.000.000</MenuItem>
                            <MenuItem value={2000000}>Dưới 2.000.000</MenuItem>
                        </Select>
                </FormControl>
            </div>
        </div>
     );
}

export default FilterProduct;