import Collection from "./Collection";
import jackets from "../assets/images/leather-jacket.png";
import round from "../assets/images/sweatshirts.png";
import pallazo from "../assets/images/pallazo.png";
import denim from "../assets/images/denim.png";




function Collections({cart,setCart}) {
  return (
    <>
      <section className="w-full bg-white py-25 px-25">
        <div>
          <h2 className="mb-10 text-center text-2xl font-semibold text-black">
            Featured Collection
          </h2>
        </div>
        <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-center gap-9">
          <Collection
            image={jackets}
            title="Brown Leather Jacket"
            price={2250} cart={cart} setCart={setCart}
          />
          <Collection
            image={round}
            title="Round-neck Sweatshirt"
            price={2000} cart={cart} setCart={setCart}
          />
          <Collection
            image={pallazo}
            title="Pleated Pallazo Trousers"
            price={1800} cart={cart} setCart={setCart}
          />
          <Collection image={denim} title="M-22 Denim Jacket" price={1200} cart={cart} setCart={setCart} />
        </div>
      </section>

    </>
  );
}
export default Collections;
