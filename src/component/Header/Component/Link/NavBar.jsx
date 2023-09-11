function NavBar({ name }) {
    return (
        <div className='w-full group relative inline-flex flex-col gap-[13px]'>
            <span className='w-full h-[1px] bg-[#999999] opacity-50'></span>
            <span className='w-0 h-[2px] z-10  absolute top-0 left-0  bg-[#666666] group-hover:w-full transition-all duration-500 ease-linear'></span>
            <h1 className='text-[18px] text-[#444444] font-bold leading-5 '>
                {name}
            </h1>
        </div>
    );
}
export default NavBar
