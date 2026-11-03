import Category from "./Category"
import Jacket from "../assets/images/jacket.png"
import Bag from "../assets/images/handbag.png"
import Shirt from"../assets/images/tshirt.png"
import Dress from "../assets/images/dress.png"
import Jeans from "../assets/images/jeans.png"
import Shoes from "../assets/images/shoe.png"
import Sweater from "../assets/images/sweater.png"


function Categories(){
    return(
        <section className="w-full bg-white py-25 px-25">
            <div>
                <h2 className="mb-10 text-center text-2xl font-semibold text-black">Top Categories</h2>
                <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center gap-3">
                    <Category img={Jacket} title="Jackets"/>
                    < Category img={Bag} title="Handbag"/>
                    < Category img={Shirt} title="T-shirt"/>
                    < Category img={Dress} title="Dress"/>
                    < Category img={Jeans} title="Jeans"/>
                    < Category img={Shoes} title="shoes"/>
                    < Category img={Sweater} title="sweater"/>
                </div>
            </div>
        </section>
    )
}
export default Categories