import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FilterProduct from "../FilterProduct";
import { ProductContext } from "../../Context/ProductContext";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


function FilterResponsive({ state }) {
    const { show, setshow } = state
    useEffect(() => {
        if (show) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
    })
    const handleClickShow = state.handleClick
    const { handleClick } = useContext(ProductContext)
    //PriceValue
    const [priceValue, setPriceValue] = useState('')
    const handleChangePrice = e => {
        setPriceValue(e.target.value)
    }
    //ColorValue
    const [size, setSize] = useState('')
    const handleChangeSize = (e) => {
        setSize(e.target.value)
    }
    const handleClickApply = () => {
        handleClick({ priceValue, size })
        handleClickShow()
    }
    return (
        <div className="z-999">
            {/* {conten} */}
            <div className={show ? 'w-full h-full bg-white fixed left-0 top-0 ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
                {/* {header} */}
                <div
                    className="h-[60px] w-full p-[12px] flex items-center relative border-b"
                    onClick={() => handleClickShow()}
                >
                    <h1 className=" absolute left-12 font-bold text-[22px]">Bộ lọc</h1>
                    <FontAwesomeIcon icon={faXmark} size="xl" className=" absolute right-12" />
                </div>
                {/* {filter} */}
                <div className="flex p-[20px] items-center">
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
                <div className="flex p-[20px] pt-0 items-center">
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