
const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

function Collection({ image, title, price, cart, setCart }){
  function handleAddToCart(e, product){
    if (e.target.textContent.toLowerCase() == "add to cart") {
      setCart(prev=>[...prev,product])
      e.target.textContent="Added to Cart"
    }
  }
  return (
    
      <div className="flex flex-col items-center text-center">
        <div className=" overflow-hidden rounded-sm bg-[#f1f1f0]  relative group w-75 h-75 ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
      
   <button onClick={e=>handleAddToCart(e,{title,image,price})}className="hidden absolute bottom-4 left-0 bg-teal-500 w-[90%] translate-x-4 py-3 text-sm font-medium text-white group-hover:opacity-100 group-hover:block">
            ADD TO CART
          </button>  
        </div>
        <div className="flex">
          <p className="p-6">{title}</p>
          <p className="p-3">{price}</p>
          {heartIcon}
        </div>
       
      </div>
      

  );
}
export default Collection;
