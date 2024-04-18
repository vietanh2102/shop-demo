import { Link } from "react-router-dom";

function Product({ products }) {
    const Show = () => {
        const { id, image, title } = products;
        const price = Number(products.price)
        return (
            <div className=" overflow-hidden  relative group shadow rounded-[4px] bg-white hover:translate-y-[-20px] duration-300">
                <div className="w-full flex justify-center items-center  h-auto">
                    {/* {img} */}
                    <div className=" flex justify-center items-center ">
                        <Link to={`/product/${id}`}>
                            <img className=" max-h-[139px] w-full xl:max-h-[208px] mt-[20px] hover:scale-105 transition duration-300" src={image[0]} alt="" />
                        </Link>
                    </div>
                </div>
                <Link to={`/product/${id}`}>
                    <div className="hidden lg:inline-block">
                        <div className="w-[50%] mx-[25%]  absolute hidden top-1/3 group-hover:animate-up  group-hover:flex  ">
                            <span
                                className="w-full py-[10px] rounded-[3px] bg-red flex justify-center items-center cursor-pointer text-white font-bold"
                            >
                                Xem Thêm
                            </span>
                        </div>
                    </div>
                </Link>
                {/* {price & category & title} */}
                <div className="text-center my-[10px]">
                    <Link className=" inline-block w-full hover:underline  hover:text-red-500 h-[50px]" to={`/product/${id}`}>{title}</Link>
                    <div className=" font-semibold">{price.toLocaleString()}<span className=" underline decoration-slice">đ</span></div>
                </div>
            </div>
        )
    }
    return (
        <Show />
    );
}

export default Product;