import About from "../page/About";
import Bottoms from "../page/Bottom";
import Shop from "../page/Home";
import Pay from "../page/Pay/Pay";
import Tops from "../page/Tops";
import Product from "../page/Product";
import Search from "../component/Search";

const publicRoutes = [
    {path:'/', component: Shop},
    {path:'/shop-demo/', component: Shop},
    {path:'/product/:id', component: Product},
    {path:'/ao-nam', component: Tops},
    {path:'/pay', component: Pay},
    {path:'/he-thong-cua-hang', component: About},
    {path:'/quan-nam', component: Bottoms},
    {path:'/tim-kiem/:searchValue', component: Search},
    {path:'/tim-kiem/', component: Search}
]
const privateRoutes = []
export {publicRoutes,privateRoutes}