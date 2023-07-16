import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from '../../Context/ProductContext';

function FilterProduct() {
    const {handleClick,type,setType,price,setPrice} = useContext(ProductContext)

    return ( 
        <div className=" border-b-black border border-t-0 border-r-0  border-l-0  my-[50px] flex ">
            <h1>Bộ Lọc:</h1>
            <div>
                <div className=' flex items-center'>
                    <h1>Loại</h1>
                    <button onClick={()=> {setPrice(false),setType(!type)}} className='ml-[5px]'>
                        {type ? <FontAwesomeIcon icon={faAngleUp} size='xs' /> : 
                            <FontAwesomeIcon size='xs' icon={faAngleDown} />}
                    </button>
                </div>
                { type &&
                <div className='w-[150px] h-auto p-[10px] my-[10px] bg-white border absolute z-10'>
                    <div className='text-center inline-block'>
                        <button onClick={() => handleClick({detail:'POLO'})}>POLO</button>
                        <br /><button onClick={() => handleClick({detail:'tee'})}>TEE</button>
                        <br /><button>SHIRT</button>
                        <br /><button>HOODIE</button>
                    </div>
                </div>
                }
            </div>
            <div>
                <div className=' flex items-center'>
                    <h1>Gia</h1>
                    <button onClick={()=> {setPrice(!price),setType(false)}} className='ml-[5px]'>
                        {price ? <FontAwesomeIcon icon={faAngleUp} size='xs' /> : 
                            <FontAwesomeIcon size='xs' icon={faAngleDown} />}
                    </button>
                </div>
                { price &&
                <div className='w-[150px] h-auto p-[10px] my-[10px] bg-white border absolute z-10'>
                    <div className='text-center inline-block'>
                        <button onClick={() => handleClick({priceFilter:'300000'})}>Duoi 300000</button>
                        <br /><button onClick={() => handleClick({priceFilter:'400000'})}>Duoi 400000</button>
                        <br /><button onClick={() => handleClick({priceFilter:'500000'})}>Duoi 500000</button>
                    </div>
                </div>
                }
            </div>
        </div>
     );
}

export default FilterProduct;