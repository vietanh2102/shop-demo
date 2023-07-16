import { Link } from "react-router-dom";
import fb from "../../assets/svg/fb.svg"
import twiter from "../../assets/svg/twiter.svg"
import youtobe from "../../assets/svg/youtobe.svg"
import tiktok from "../../assets/svg/tiktok.svg"


function Footer() {
    return (
        <div className='w-full  bg-[#f1f1f1]'>
            <div className="pt-[40px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="pl-[40px] pb-[40px] pr-[15px]  border-b md:border-r border-de h-auto">
                    <h1 className=" font-bold py-[20px]">Thời trang nam</h1>
                    <span>Hệ thống thời trang cho phái mạnh hàng đầu Việt Nam, hướng tới phong cách nam tính, lịch lãm và trẻ trung.</span>    
                </div>
                <div className="pl-[40px] pb-[40px] pr-[15px] border-b md:border-r border-de h-auto">
                    <h1 className=" font-bold py-[20px]">Thông tin liên hệ</h1>
                    <span><b>Đia chỉ: </b>Số 8 Nguyễn Thị Định, Thanh Xuân, Hà Nội</span>
                    <br /><span><b>Điện Thoại: </b>0968638211</span>
                    <br /><span><b>Email: </b>vanh210211@gmail.com</span>

                </div>
                <div className="pl-[40px] pb-[40px] pr-[15px] border-b md:border-r border-de h-auto">
                    <h1 className=" font-bold py-[20px]">Nhóm liên kết</h1>
                    <ul className=" list-disc">
                        <li>Tìm kiếm</li>
                        <li className="py-[10px]">Chính sách đổi trả</li>
                        <li>Chính sách bảo mật</li>
                        <li className="py-[10px]">Liên hệ</li>
                    </ul>
                </div>
                <div className="pl-[40px] pb-[40px] pr-[15px] border-b h-auto">
                    <h1 className=" font-bold py-[20px]">Mạng xã Hội</h1>
                    <div className="flex">
                        <button className="w-[40px] h-[40px] border rounded-[4px] bg-white flex justify-center items-center mr-[10px]">
                            <img src={fb} alt="er" />
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-[4px] bg-white flex justify-center items-center mr-[10px]">
                            <img src={twiter} alt="er" />
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-[4px] bg-white flex justify-center items-center mr-[10px]">
                            <img src={youtobe} alt="er" />
                        </button>
                        <button className="w-[40px] h-[40px] border rounded-[4px] bg-white flex justify-center items-center">
                            <img src={tiktok} alt="er" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;