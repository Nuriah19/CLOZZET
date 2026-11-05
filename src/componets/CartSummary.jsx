
function CartSummary(){
    return(

          <div className="w-full md:w-1/3  bg-gray-100 p-6 rounded-lg border border-gray-300 mx-10">
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
    )
}
export default CartSummary