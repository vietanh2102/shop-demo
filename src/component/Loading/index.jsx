import Skeleton from "react-loading-skeleton";


function Loading() {
    return ( 
        <div className="mx-0 sm:mx-[10px] md:mx-[2rem] lg:mx-[18rem] ">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                <Skeleton />
            </div>
        </div>
     );
}

export default Loading;