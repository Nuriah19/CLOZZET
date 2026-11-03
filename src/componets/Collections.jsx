import Collection from "./Collection";
import jackets from "../assets/images/leather-jacket.png";
import round from "../assets/images/sweatshirts.png";
import pallazo from "../assets/images/pallazo.png";
import denim from "../assets/images/denim.png";
import mens from "../assets/images/mens.png"
import watch from "../assets/images/watches.png"
import bag from "../assets/images/hbags.png"
import dress from "../assets/images/ladies.png"

const playIcon = (
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
      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
    />
  </svg>
);

function Collections() {
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
            price={2250}
          />
          <Collection
            image={round}
            title="Round-neck Sweatshirt"
            price={2000}
          />
          <Collection
            image={pallazo}
            title="Pleated Pallazo Trousers"
            price={1800}
          />
          <Collection image={denim} title="M-22 Denim Jacket" price={1200} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f1f1f0] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
            <div className="z-10 max-w-50">
              <p className="text-1xl text-gray-400 mb-1">Casual Collections</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Men's Collection</h3>
              <span>Shop Now {playIcon}</span>
            </div>
            <div className="w-20 h-30 flex items-center justify-center">
            <img src={mens}/>
            </div>
          </div>

 <div className="bg-[#E6F9FB] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
            <div className="z-10 max-w-50">
              <p className="text-1xl text-gray-400 mb-1">Casual Collections</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Luxury Watches</h3>
              <span>Shop Now {playIcon}</span>
            </div>
            <div className="w-20 h-30 flex items-center justify-center">
            <img src={watch}/>
            </div>
          </div>

<div className="bg-[#FFF1F1] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
            <div className="z-10 max-w-50 h-20">
              <p className="text-1xl text-gray-400 mb-1">Casual Collections</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Designer Handbag</h3>
              <span>Shop Now {playIcon}</span>
            </div>
            <div className="w-20 h-30 flex items-center justify-center">
            <img src={bag}/>
            </div>
          </div>



<div className="bg-[#FBDEDD] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
            <div className="z-10 max-w-50">
              <p className="text-1xl text-gray-400 mb-1">Casual Collections</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ladies Collection</h3>
              <span>Shop Now {playIcon}</span>
            </div>
            <div className="w-20 h-30 flex items-center justify-center">
            <img src={dress}/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
export default Collections;
