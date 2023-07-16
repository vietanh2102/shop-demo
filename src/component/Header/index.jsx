import { useState,useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.webp'
import cart from '../../assets/cart.svg'
import user from '../../assets/user.svg'
import Input from '../Input';
import HeaderResponsiv from '../HeaderResponsive';



function Header() {
    const [bar,setBar] = useState(false)
    const { itemAmount } = useContext(CartContext)
    return(
        <div className=' fixed top-0 z-10 w-full h-[100px] bg-[#f1f1f1] flex flex-row  shadow'>
                {/* Logo */}
            <div className='z-10 flex justify-center items-center h-full basis-2/4 lg:basis-1/4 order-2'>
                <img className='h-[70px]' src={logo} alt='err' />
            </div>

                {/* {responsive} */}
            <HeaderResponsiv state={{bar,setBar}} />

                {/* SideBar */}
            <div className=' hidden lg:flex justify-center items-center h-full basis-2/4 order-2'>
                    <div className='grid grid-cols-4  text-[14px] font-bold '>
                        <Link to={'/'}><div>Home</div></Link>
                        <Link to={'/ao-nam'}><div>Áo Nam</div></Link>
                        <Link to={'/quan-nam'}><div>Quần Nam</div></Link>
                        <Link to={'/he-thong-cua-hang'}><div>Hệ thống cửa hàng</div></Link>
                    </div>
            </div>
            <div className={bar ? 'hidden' : 'h-full flex items-center justify-center basis-1/4 lg:order-3'}>
                <div className='flex items-center'>
                    {/* {Input} */}
                    <Input />

                    {/* {Cart} */}
                    <div className='mx-4 relative'>
                    <Link to={'/pay'}>
                        <img src={cart} alt='err' className='pb-[8px]' />
                    </Link>
                        <span className=' absolute flex justify-center items-center bottom-[10px] right-[-7px] text-[12px] text-white bg-red-600 rounded-full h-[15px] w-[15px]'>{itemAmount}</span>
                    </div>
                    {/* {User} */}
                    <div className=''>
                        <button>
                            <img src={user} alt='err' />
                        </button>
                    </div>          
                </div>
            </div>            
        </div>
    )

}


export default Header;