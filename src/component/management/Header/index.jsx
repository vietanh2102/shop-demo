
import searchImg from "../../../assets/search.svg"
function Header() {
    return (
        <div className="flex">
            <div className="p-[20px] w-[150px] border bg-white">
                <span className="font-bold text-center">ĐƠN HÀNG</span>
            </div>
            <div className="w-full border ml-[5px] flex">
                <img src={searchImg} alt="err" className="ml-[10px] cursor-pointer" />
                <input className="w-full p-[20px] outline-none" placeholder="Mã đơn hàng/SĐT" />
            </div>
        </div>
    );
}

export default Header;