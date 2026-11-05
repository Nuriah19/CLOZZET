
import images from "../assets/images/hero-image.png";

const searchIcon = (
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
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex">
          <div className="mx-17 py-10 w-[40%]">
            <h1 className="text-5xl font-bold py-5  ">
              Choose the look that <span className="text-[#45C9A1]">suits</span>{" "}
              you best
            </h1>
            <p>
              Everyday is a fashion show & the world is your runway. Clozzet
              will elevate your wardrobe with the best collections. Be
              Exclusive, Be Devine, Be yourself. Explore outfits that will make
              you comfortably beautiful. True style never dies.
            </p>
            <div className=" flex py-10 mx-10  grid-cols-2 gap-5 ">
              <button className="rounded-full bg-[#45c9a1] text-white py-4 px-10">
                Shop Now
              </button>
              <button className="rounded-full bg-[#f1f1f0] text-[#45c9a1] border-black py-4 px-10">
                About Us
              </button>
            </div>
            <div className="flex px-3 py-5 mx-5 bg-[#f1f1f0] rounded-full  grid-cols-2 gap-5">
              {searchIcon}
              <button>Search</button>
            </div>
          </div>
          <div className="w-[60%]">
            <img className="" src={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
