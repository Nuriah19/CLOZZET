import Nav from "../componets/Nav";
import Footer from "../componets/Footer";
import Sweater from "../assets/shop-images/knitted-sweater.png";
import Sneaker from "../assets/shop-images/unisex.png";
import Dress from "../assets/shop-images/slim-banquet-dress.png";
import Jeans from "../assets/shop-images/denim-jeans.png";

function Cart() {
  return (
    <section>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-2/3">
            <ul className="grid grid-cols-3 items-center gap-2 text-sm border-collapse border border-gray-300 px-9 py-5">
              <li className="font-bold text-1xl text-center">Product</li>
              <li className="font-bold text-1xl text-center">Quantity</li>
              <li className="font-bold text-1xl text-center">Price</li>
            </ul>
            <div className="flex items-center gap-3">
              <img
                src={Sweater}
                className="w-16 h-16 object-cover rounded px-3"
              />
              <div>
                <p className="font-semibold text-gray-800 w-1 py-1">
                  Strip Knitted Sweater
                </p>
                <p className="text-xs text-gray-400 py-2">Size: XL</p>
              </div>

              <div className="flex justify-center py-25 px-50">
                <div className="flex items-center border border-grey-400 rounded bg-grey-700 px-3 py-1 gap-4 text-black">
                  <span>-</span>
                  <span className="font-semibold text-gray-800">1</span>
                  <span>+</span>
                </div>
              </div>
              <div className="text-right font-medium text-black">
                <span>KSH 2250</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={Sneaker}
                className="w-16 h-16 object-cover rounded px-3"
              />
              <div>
                <p className="font-semibold text-gray-800 w-1 py-1">
                  Unisex AirForce Sneakers
                </p>
                <p className="text-xs text-gray-400 py-2">Size: 40</p>
              </div>

              <div className="flex justify-center py-25 px-50">
                <div className="flex items-center border border-gray-400 rounded bg-grey-700 px-3 py-1 gap-5 text-gray-600">
                  <span>-</span>
                  <span className="font-semibold text-gray-800">1</span>
                  <span>+</span>
                </div>
              </div>
              <div className="text-right font-medium text-black">
                <span>KSH 2000</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={Dress}
                className="w-16 h-16 object-cover rounded px-3"
              />
              <div>
                <p className="font-semibold text-gray-800 w-1 py-1">
                  Slim Banquent Dress
                </p>
                <p className="text-xs text-gray-400 py-2">Size: M</p>
              </div>

              <div className="flex justify-center py-25 px-50">
                <div className="flex items-center border border-grey-400 rounded bg-grey-700 px-3 py-1 gap-4 text-black">
                  <span>-</span>
                  <span className="font-semibold text-gray-800">1</span>
                  <span>+</span>
                </div>
              </div>
              <div className="text-right font-medium text-black">
                <span>KSH 10,250</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={Jeans}
                className="w-16 h-16 object-cover rounded px-3"
              />
              <div>
                <p className="font-semibold text-gray-800 w-1 py-1">
                  Women Denim Jeans
                </p>
                <p className="text-xs text-gray-400 py-2">Size: L</p>
              </div>

              <div className="flex justify-center py-25 px-50 ">
                <div className="flex items-center border border-grey-400 rounded bg-grey-700 px-3 py-1 gap-4 text-black">
                  <span>-</span>
                  <span className="font-semibold text-gray-800">1</span>
                  <span>+</span>
                </div>
              </div>
              <div className="text-right font-medium text-black">
                <span>KSH 10,250</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3  bg-gray-100 p-6 rounded-lg border border-gray-300">
            <h2 className="font-bold py-3 text-2xl"> Cart Summary</h2>
            <p>Have a promo code? Apply here</p>
            <form className="flex flex-col sm:flex-row justify-center items-center  grid-cols-2 gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Promo Code(Optional)"
                className="bg-[#ffffff]  grid-cols-2 gap-2 py-3 px-3"
              />
              <button className="bg-[#45c9a1] text-white py-3 px-5 grid-cols-2 gap-2 ">
                Apply
              </button>
            </form>
            <div className="space-y-2 text-sm pt-6 ">
              <div className="flex justify-between">
                <span>SubTotal</span>
                <span>KSH 16,000</span>
              </div>
              <div className="flex justify-between py-3">
                <span>Delivery Fee</span>
                <span>KSH 450</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2 font-bold">
                <span>Total</span>
                <span>KSH 16,450</span>
              </div>
              <button className="bg-[#45c9a1] text-white py-3 px-5 grid-cols-2 gap-2 w-50 mt-3 rounded text-sm font-medium">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
export default Cart;
