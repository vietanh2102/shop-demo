import { useParams } from "react-router-dom";
import React,{useContext, useEffect,useState} from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CartContext } from "../../Context/CartContext";
import sizeImg from "../../assets/img/size.webp"
import { Link } from "react-router-dom";

function Product() {
    const a = [
        {
            a:1,
            b:2
        },
        {
            a:3,
            b:4
        }
    ]
    const {id} = useParams()
    const [product,setProduct]=useState([])
    const [loading,setLoading] = useState(false)
    const {addItem,cart,itemAmount} = useContext(CartContext)
    const handleClick = (id,product) => {
        if(itemAmount === 0){
            addItem(id,product)
        }
    }
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
    const price = Number(product.price)
    const size = product.size
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
                    <div className="">{price.toLocaleString()}đ</div>
                    {/* {size} */}
                    <div className=" mt-[30px]">
                        <h1 className=" font-bold text-left mb-[5px]">Size:</h1>
                        <div className="flex">
                            {size && size.map(item => (
                                <div key={item} className="w-[80px] md:w-[85px] h-[35px] ml-[10px] border border-[#333] rounded-[3px]  bg-white flex items-center justify-center">
                                <button>{item}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {button} */}
                    <div 
                        className="w-[full] h-[44px] mt-[30px] border border-[#333] rounded-[3px] bg-white flex justify-center items-center cursor-pointer"
                        onClick={()=> addItem(product.id,product)}
                    >
                        <button>
                            Thêm vào giỏ
                        </button>
                    </div>
                    <Link to={'/pay'}>
                        <div 
                            className="w-[full] h-[44px] mt-[5px] border border-black bg-[#333] rounded-[3px] text-white flex justify-center items-center cursor-pointer"
                            onClick={() => handleClick(product.id,product)}
                        >
                                <button>
                                    Mua ngay
                                </button>
                        </div>
                    </Link>
                    <div className="my-[30px]">
                        <h1 className=" font-bold text-left">Size chart:</h1>
                        <img src={sizeImg} alt="err" />
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