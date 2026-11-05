import Nav from "../componets/Nav"
import Footer from "../componets/Footer"


function Layout({children,cart}){
    return(
        <div className="flex flex-col h-screen">
            <Nav cart={cart}/>
            <main className="flex-1">
        {children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout