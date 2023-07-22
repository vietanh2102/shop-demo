import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


function LoadingHome() {
    return ( 
        <div className="mx-0 sm:mx-[30px] md:mx-[10rem] lg:mx-[18rem]">
                <div className="w-full">
                    <Skeleton className="h-[800px] w-full" />
                    <Skeleton className="h-[800px] w-full" />
                </div>
            </div>
     );
}

export default LoadingHome;