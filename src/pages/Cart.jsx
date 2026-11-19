import { Link } from "react-router";
import CartSummary from "../componets/CartSummary";
import CartItems from "../componets/CartItems";
import { useContext } from "react";
import { stateContext } from "../context/State";

function Cart() {
   const {cart, setCart} = useContext(stateContext);
  return (
    <main>
      {cart.length == 0 ? (
        <div className="text-4xl font-serif text-center py-30">
          <div className="text-center flex"></div>
          <p>Cart is Empty !!!!</p>
          <p>Go Shop Or Are You Broke???🤣🫵🏽</p>
          <Link to="/">
            <button className="rounded-full bg-[#45c9a1] text-[#f1f1f0] border-black py-4 px-10">
              Go Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-start">
          <CartItems cart={cart} setCart={setCart} />
          <CartSummary cart={cart} />
        </div>
      )}
    </main>
  );
}
export default Cart;
