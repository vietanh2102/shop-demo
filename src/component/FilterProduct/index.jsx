import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { ProductContext } from '../../Context/ProductContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FilterProduct() {
    const { setShowFilter, handleClick } = useContext(ProductContext)
    const [filterTop, setFilterTop] = useState(false)
    const [filterBottom, setFilterBottom] = useState(false)
    //Price
    const [priceValue,setPriceValue] = useState('')
    const handleChangePrice = e => {
        setPriceValue(e.target.value)
    }
    //ColorValue
    const [color,setColor] = useState('')
    const handleChangeColor = (e) =>{
        setColor(e.target.value)
    }
    //Sizevalue
    const [size, setSize] = useState('')
    const handleChangeSize = (e) => {
        setSize(e.target.value)
    }
    const handleCancel = () =>{
        setPriceValue('')
        setSize('')
        setColor('')
        setShowFilter(false)
    }

    return (
        <div className=" mr-[20px] pl-0 font-bold lg:ml-0 border-r h-[700px] ">
            <h1 className=' font-bold text-[20px] hidden lg:inline-block w-full'>Bộ Lọc:</h1>
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
                            {filterTop ? <FontAwesomeIcon icon={faAngleUp} size='sm' /> : <FontAwesomeIcon icon={faAngleDown} size='sm' />}
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
                            {filterBottom ? <FontAwesomeIcon icon={faAngleUp} size='sm' /> : <FontAwesomeIcon icon={faAngleDown} size='sm' />}
                        </button>
                    </div>
                    <div className={filterBottom ? "pl-[10px]" : " hidden"}>
                        <Link to={"/quan-dai"}><h1>Quần dài</h1></Link>
                        <Link to={"/quan-short"}><h1>Quần short</h1></Link>
                    </div>
                </div>
                <h1 className=' my-[5px] ml-[10px]'>Hệ thống cửa Hàng</h1>
            </div>
            <div className='flex p-[20px] pl-0 pt-0 items-center'>
                <h1 className='mb-[5px] mr-[10px] w-[110px]'>Lọc theo giá:</h1>
                <FormControl sx={{ minWidth: 120 }} size='small'>
                    <InputLabel>Giá</InputLabel>
                    <Select
                        label="Price"
                        value={priceValue}
                        onChange={handleChangePrice}
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
            <div className="flex p-[20px] pl-0 pt-0 items-center">
                <h1 className='mb-[5px] mr-[10px] w-[110px]'>Lọc theo size:</h1>
                <FormControl sx={{ minWidth: 120 }} size='small'>
                    <InputLabel>Size</InputLabel>
                    <Select
                        label="size"
                        value={size}
                        onChange={handleChangeSize}
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>---</em>
                        </MenuItem>
                        <MenuItem value={"S"}>Size S</MenuItem>
                        <MenuItem value={"M"}>Size M</MenuItem>
                        <MenuItem value={"L"}>Size L</MenuItem>
                        <MenuItem value={"XL"}>Size XL</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="flex p-[20px] pl-0 pt-0 items-center">
                <h1 className='mb-[5px] mr-[10px] w-[110px]'>Lọc theo màu:</h1>
                <FormControl sx={{ minWidth: 120 }} size='small'>
                    <InputLabel>Màu</InputLabel>
                    <Select
                        label="color"
                        value={color}
                        onChange={handleChangeColor}
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>---</em>
                        </MenuItem>
                        <MenuItem value={"white"}>Trắng</MenuItem>
                        <MenuItem value={"black"}>Đen</MenuItem>
                        <MenuItem value={"red"}>Đỏ</MenuItem>
                        <MenuItem value={"grey"}>Xám</MenuItem>
                        <MenuItem value={"green"}>Xanh lá</MenuItem>
                        <MenuItem value={"cream"}>Kem</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='flex justify-center'>
                <button
                    className="w-[40%] h-[40px] bg-[#ffffff]  border rounded-[4px] mr-[10px] "
                    onClick={() => handleCancel()}
                >
                    Bỏ lọc
                </button>
                <button
                    className="w-[40%] h-[40px] bg-red text-[#ffffff] border rounded-[4px]"
                    onClick={() => handleClick({priceValue,size,color})}
                >
                    Áp dụng
                </button>
            </div>
        </div>
    );
}

export default FilterProduct;