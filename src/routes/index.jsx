import About from "../page/About";
import Bottoms from "../page/Bottom";
import Shop from "../page/Home";
import Pay from "../page/Pay/Pay";
import Tops from "../page/Tops";
import Product from "../page/Product";
import Search from "../component/Search";
import Tee from "../page/ClothesStyle/Tee";
import LongBottoms from "../page/ClothesStyle/LongBottoms";
import Polo from "../page/ClothesStyle/Polo";
import Hoodie from "../page/ClothesStyle/Hoodie";
import ShortBottoms from "../page/ClothesStyle/ShortBottoms";

const publicRoutes = [
    // header
    { path: '/', component: Shop },
    { path: '/shop-demo/', component: Shop },
    { path: '/ao-nam', component: Tops, },
    { path: '/quan-nam', component: Bottoms, },
    { path: '/pay', component: Pay },
    //ProductDetail
    { path: '/product/:id', component: Product },
    //StyleProduct
    { path: '/ao-polo', component: Polo, },
    { path: '/tee', component: Tee, },
    { path: '/hoodie', component: Hoodie, },
    { path: '/quan-dai', component: LongBottoms, },
    { path: '/quan-short', component: ShortBottoms, },
    //Search
    { path: '/tim-kiem/:searchValue', component: Search },
    { path: '/tim-kiem/', component: Search }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }