import { useParams } from "react-router-dom";
import React,{useContext, useEffect,useState} from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CartContext } from "../../Context/CartContext";
import size from "../../assets/img/size.webp"
import { Link } from "react-router-dom";

function Product() {
    const {id} = useParams()
    const [product,setProduct]=useState([])
    const [loading,setLoading] = useState(false)
    
    const {addItem} = useContext(CartContext)
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://hpvggl-8080.csb.app/products/${id}`);
            const data = await res.json();
            setProduct(data);
            setLoading(false)
        }
        getProduct()
    },[])
    const Show = () => {
        return(
        <div className="  mx-0 sm:mx-[30px] md:mx-[8rem] lg:mx-[10rem] py-[30px]">
            <h1 className="w-[100px] text-center h-[25px] my-[10px] bg-black text-white">New Arrival</h1>
            <div className="inline-block md:grid grid-cols-2">
                <div>
                    <img className=" max-h-[500px] mx-auto" src={product.image} alt="erro" />
                </div>
                {/* {detail} */}
                <div className="text-center mx-auto md:mx-[20px]">
                    <div className=" ">{product.title}</div>
                    <div className="">{product.price}đ</div>
                    {/* {size} */}
                    <div className=" mt-[30px]  lg:flex">
                        <div className="flex">
                            <div className="w-[85px] h-[35px] ml-[10px] border border-[#333] rounded-[3px]  bg-white flex items-center justify-center">
                                <button>Size S</button>
                            </div>
                            <div className=" w-[85px] h-[35px] ml-[10px] border border-[#333] rounded-[3px]  bg-white flex items-center justify-center">
                                <button>Size M</button>
                            </div>
                            <div className=" w-[85px] h-[35px] ml-[10px] border border-[#333] rounded-[3px]  bg-white flex items-center justify-center">
                                <button>Size L</button>
                            </div>
                        </div>
                        <div className=" w-[85px] h-[35px] m-[10px] border border-[#333] rounded-[3px]  bg-white flex items-center justify-center">
                            <button>Size XL</button>
                        </div>
                    </div>
                    {/* {button} */}
                    <div className="w-[full] h-[44px] mt-[30px] border border-[#333] rounded-[3px] bg-white flex justify-center items-center">
                        <button onClick={()=> addItem(product.id,product)}>
                            Thêm vào giỏ
                        </button>
                    </div>
                    <div className="w-[full] h-[44px] mt-[5px] border border-black bg-[#333] rounded-[3px] text-white flex justify-center items-center">
                        <Link to={'/pay'}>
                            <button onClick={() => addItem(product.id,product)}>
                                Mua ngay
                            </button>
                        </Link>
                    </div>
                    <div className="my-[30px]">
                        <h1 className=" font-bold text-left">Size chart:</h1>
                        <img src={size} alt="err" />
                    </div>
                </div>
            </div>
            {/* {san pham lien quan} */}
        </div>
        )
    }
    const Loading = () => {
        return(
            <div className="  mx-[200px]">
            <div className="my-[50px] grid grid-cols-3">
                <div className="col-span-1  h-[500px] " style={{lineHeight:2}}>
                    <Skeleton height={500}  />
                </div>
                <div className="col-span-2 mx-[50px]">
                    <Skeleton height={500} />
                </div>
            </div>
        </div>
        )
    }
    return (
        loading ? <Loading /> : <Show />
     );
}

export default Product;