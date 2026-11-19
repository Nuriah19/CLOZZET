import shoes from "../assets/shop-images/unisex.png";
import { useContext } from "react";
import { stateContext } from "../context/State";
function SinglePage({ img, title, price }) {
  const {cart,setCart}=useContext(stateContext)
  function handleAddToCart(e, product) {
    if (e.target.textContent.toLowerCase() == "add to cart") {
      setCart(prev=>[...prev,product])
      e.target.textContent="Added to Cart"
    }

  }
  const shoppingcart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
  const heart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-5 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <img src={shoes} />
        </div>
        <div>
          <p className="text-emerald-500">shoes</p>
          <h3 className="text-2xl font-extrabold">Unisex Airforce Sneakers</h3>
          <div className="w-12 h-0.5 bg-black mt-4 mb-5"></div>
          <h2 className="font-extrabold">KSh 3,500</h2>
          <p>
            The sneaker has all sizes which fits to normal size,it is suitable
            for all weather conditions, it is light in weight making it
            comfortable for a long wear. The shoe can be worn by both gender. It
            is suitable for outdoor activities. Buy from our shop, get it
            delivered to your doorstep and slay the whole day.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-5 ">
          <div>
            <label className="font-semibol text-sm">SELECT SIZE</label>
            <div className="relative flex items-center justify-center border border-gray-300 rounded-full w-fit overflow-hidden divide-x-2 divide-solid divide-gray-300">
              <select className="appearance-none bg-transparent pl-4 pr-9 py-2 text-sm outline-none cursor-pointer">
                <option value="size">38</option>
                <option value="size">39</option>
                <option value="size">40</option>
                <option value="size">41</option>
                <option value="size">42</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-semibol text-sm">QUANTITY</label>
            <div className="grid grid-cols-3  items-center justify-between border border-gray-300 rounded-full  max-w-37.5 mx-auto overflow-hidden divide-x-3 divide-solid divide-gray-300">
              <button className="cursor-pointer px-3 py-2 hover:bg-gray-100">
                -
              </button>
              <span className="font-semibold text-gray-800 ">1</span>
              <button className="cursor-pointer px-3 py-2 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={e=>handleAddToCart(e,{title,img,price, quantity:1})} className="flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-3 rounded-md transition duration-300 cursor-pointer">
            {shoppingcart} ADD TO CART
          </button>
          <button className="flex items-center justify-center gap-2 border px-4 py-3 rounded-md text-xs font-medium transition duration-300 border-gray-200 text-black hover:border-gray-400 cursor-pointer">
            {heart}SAVE TO WISHLIST
          </button>
        </div>
      </div>
    </section>
  );
}
export default SinglePage;