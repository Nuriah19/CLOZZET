const trashIcon = (
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
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

function CartItem({ image, title, subtitle, price, quantity }) {
 function handleIncrement(){
  cart.map(item=>{
    if(item.title==title){
      return{...item, quantity:item.quantity+1}
    }
  })
  return item
 }
  return (
    <div className="flex items-center">
      <div>
        <div className="flex  gap-3 items-start">
          <img src={image} alt={title} className="w-40" />
        </div>
        <div className="p-10">
          <p className="font-semibold text-gray-800 w-1 py-1">{title}</p>
          <p className="text-xs text-gray-400 py-2">{subtitle}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-center py-25 px-50 ">
          <div className="flex items-center border border-grey-400 rounded bg-grey-700 px-3 py-1 gap-4 text-black">
            <span className="cursor-pointer">-</span>
            <span className="font-semibold text-gray-800">{quantity}</span>
            <span className="cursor-pointer">+</span>
            <span className="text-purple-500">{trashIcon}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-right font-medium text-black p-20">{price}</p>
      </div>
    </div>
  );
}
export default CartItem;
