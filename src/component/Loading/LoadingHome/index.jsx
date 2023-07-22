import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import img1 from "../../../assets/bg.webp"


function LoadingHome() {
    return (
        <>
        <div>
            <img src={img1} alt="erro" />
        </div>
        <div className="mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[18rem] ">
            <div className="w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] my-[15px]">
                <Skeleton height={304} className="w-[140px] md:w-[250px]"/>
                <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                <Skeleton height={304} className="w-[140px] md:w-[250px]"/>
                <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                <Skeleton height={304} className="w-[140px] md:w-[250px]" />
            </div>
        </div>
            </> 
     );
}

export default LoadingHome;