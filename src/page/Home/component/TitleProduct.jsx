import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IsIntoView } from "../../../hooks/useShow";

function TitleProduct({ path, title }) {
    const ref = useRef(null)
    const [isViewTitle, setIsViewTitle] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            IsIntoView(ref, setIsViewTitle)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div
            className={`duration-500 ${isViewTitle ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}
            ref={ref}
        >
            <Link to={path}>
                <button className=" text-left text-[28px] font-bold py-[30px] hover:text-red-500 hover:underline">
                    {title}
                </button>
            </Link>
        </div>
    );
}

export default TitleProduct;