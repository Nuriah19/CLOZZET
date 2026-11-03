import { BrowserRouter,Routes,Route } from "react-router"
import Home from "../pages/Home"
import Cart from "../pages/Cart"



function Router(){
    return(
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/" element={<Cart/>}>
        <Route path="*" element={<Notfound/>}>

        </Route>
        </Route>
        </Route>
    </Routes>

        </BrowserRouter>
    )
}
export default Router