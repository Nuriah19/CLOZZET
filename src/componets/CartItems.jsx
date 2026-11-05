import CartItem from "./CartItem";
function CartItems({ cart }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="w-full md:w-3/3">
          <ul className="grid grid-cols-3 items-center gap-2 text-sm border-collapse border border-gray-300 px-9 py-5">
            <li className="font-bold text-1xl text-center">Product</li>
            <li className="font-bold text-1xl text-center">Quantity</li>
            <li className="font-bold text-1xl text-center">Price</li>
          </ul>
        </div>
      </div>
      <div>
        {cart &&
          cart.map((item) => {
            return (
              <div className="flex items-center gap-3">
                <CartItem
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={1}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default CartItems;
