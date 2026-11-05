import {useState} from "react"
import { BrowserRouter,Routes,Route } from "react-router"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Notfound from "../pages/Notfound"
import Layout from "../pages/Layout"


function Router(){
    const [cart,setCart]=useState([])
    return(
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout cart={cart}><Home cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="/cart" element={<Layout cart={cart}><Cart cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="*" element={<Layout cart={cart}><Notfound cart={cart}/></Layout>}/>

    </Routes>

        </BrowserRouter>
    )
}
export default Router