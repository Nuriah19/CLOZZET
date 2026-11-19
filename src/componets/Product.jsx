import { useContext } from "react";
import { stateContext } from "../context/State";
const heartIcon = (
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
function Product({ img, title, price }) {
  const {cart,setCart}=useContext(stateContext)
  function handleAddToCart(e, product) {
    if (e.target.textContent.toLowerCase() == "add to cart") {
      setCart(prev=>[...prev,product])
      e.target.textContent="Added to Cart"
    }

  }
  return (
    <div className=" flex flex-col   items-center text-center">
      <div className=" rounded-sm bg-[#F1F1F0]  relative group w-75 h-75">
        <img src={img} className="w-full h-full object-contain" />
        <button
          onClick={e=>handleAddToCart(e,{title,img,price, quantity:1})}
          className=" text-1xl hidden absolute bottom-4 left-0  bg-teal-500 w-[90%] translate-x-4 py-3  font-medium text-white group-hover:opacity-100 group-hover:block  "
        >
          ADD TO CART
        </button>
      </div>
      <div>
        <div className="px-25">
          <h3 className="text-sm">{title}</h3>
          <p className="text-emerald-400">KSH {price}</p>
          <button className="flex shrink-0 text-xl text-gray-500 transition-colors hover:text-red-500">
            {heartIcon}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;