import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import FilterProduct from "../FilterProduct";


function Loading() {
    return ( 
        <div className="flex  mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[10rem] pt-[30px] h-full">
                <div className="hidden lg:flex w-[300px] h-full mb-[30px]">
                    <FilterProduct />
                </div>
                <div className="w-full ml-[50px] ">
                <div className=" w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-[30px] my-[15px] ">
                    <Skeleton height={304} className="w-[140px] md:w-[250px]"/>
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                    <Skeleton height={304} className="w-[140px] md:w-[250px]" />
                </div>
                </div>
            </div>
     );
}

export default Loading;