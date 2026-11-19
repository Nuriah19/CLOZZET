import Product from "./Product";
import Jacket from "../assets/images/leather-jacket.png";
import round from "../assets/images/sweatshirts.png";
import pallazo from "../assets/images/pallazo.png";
import denim from "../assets/images/denim.png";
import ragged from "../assets//shop-images/ragged-jeans.png";
import banquet from "../assets/shop-images/slim-banquet-dress.png";
import watch from "../assets/shop-images/quartz-watch.png";
import women from "../assets/shop-images/denim-jeans.png";
import brown from "../assets/shop-images/brown-handbag.png";
import airforce from "../assets/shop-images/unisex.png";
import bomber from "../assets/shop-images/bomber.png";
import shoes from "../assets/shop-images/leather-shoes.png";
import serpenti from "../assets/shop-images/serpenti-forever.png";
import tshirt from "../assets/shop-images/graphic-tshirts.png";
import cocktail from "../assets/shop-images/cocktail.png";
import offShoulder from "../assets/shop-images/Off-The-Shoulder.png";
import airsence from "../assets/shop-images/Airsense-pleated.png";
import classy from "../assets/shop-images/smartwatch.png";
import heels from "../assets/shop-images/ZOOSHI-COBALT.png";
import sweater from "../assets/shop-images/knitted-sweater.png";
import { Search, ChevronDown } from "lucide-react";

import { useContext } from "react";
import { stateContext } from "../context/State";
function Products() {
  const { cart, setCart } = useContext(stateContext);
  const left = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-7"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
  const right = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-7"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
  return (
    <section className="w-full bg-white py-25 px-25">
      <div className="w-full flex items-center border border-emerald-400 rounded-full px-4 py-3 bg-white">
        {/* Search section */}
        <div className="flex items-center flex-1 gap-3 min-w-0">
          <Search size={22} className="text-black shrink-0" />

          <input
            type="text"
            placeholder="Search Products and categories"
            className="w-full outline-none border-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
          />
        </div>

        {/* Divider */}
        <div className="h-9 w-px bg-gray-400 mx-5"></div>

        {/* Category dropdown */}
        <button
          type="button"
          className="flex items-center gap-3 text-sm text-gray-700 whitespace-nowrap"
        >
          <span>Filter Category</span>
          <ChevronDown size={18} />
        </button>
      </div>

      <div className=" grid grid-cols-4 md:flex-wrap lg:flex-nowrap justify-center gap-3">
        <Product img={ragged} title="Blue ragged jeans" price={2250} />
        <Product img={banquet} title="Slim Banquet Dress" price={10250} />
        <Product img={denim} title="Blue Denim Jacket" price={2250} />
        <Product img={watch} title="Quartz men's watch" price={2250} />
        <Product img={women} title="Women Denim Jeans" price={2250} />
        <Product img={brown} title="Brown Handbag" price={2250} />
        <Product img={Jacket} title="Brown leather jacket" price={2250} />
        <Product img={tshirt} title="Unisex Graphic T-shirts" price={2250} />
        <Product img={bomber} title="Black Bomber Jacket" price={2250} />
        <Product img={shoes} title="Pure leather shoes" price={2250} />
        <Product img={serpenti} title="Purple Serpenti purse" price={2250} />
        <Product img={airforce} title="unisex Airforce Sneakers" price={2250} />
        <Product img={cocktail} title="Blue Cocktail Dress" price={2250} />
        <Product img={offShoulder} title="Off-Shoulder-Pants" price={2250} />
        <Product img={round} title="Sweatshirts" price={2250} />
        <Product img={classy} title="Classy Smart Watch" price={2250} />
        <Product img={heels} title="Blue Plattforms Heels" price={2250} />
        <Product img={airsence} title="Airsense Pleated Pants" price={2250} />
        <Product img={sweater} title="Strip Knitted Sweater" price={2250} />
        <Product img={pallazo} title="Pleated Pallazo" price={2250} />
        <div className="flex justify-between gap-3 pt-15">
          <div className="flex justify-center ml-90 gap-10">
            {left}
            <button
              className="w-10 h-10 rounded-full border  flex items-center justify-center text-gray-500 transition  bg-emerald-400 border-emerald-400
           hover:bg-gray-100"
            >
              1
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition ">
              2
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
              3
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
              4
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
              5
            </button>
            {right}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Products;
