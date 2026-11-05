import Logo from "../assets/images/logo.svg";
import Email from "../assets/images/email.png";
import Phone from "../assets/images/phone.png";
import Insta from "../assets/images/instagram.png"
import Face from "../assets/images/facebook.png"
import Twit from "../assets/images/twitter.png"
function Footer() {
  return (
    <footer className="bg-[#f1f1f0] pt-12 pb-8 px-6 text-[#2d3748]">
      <div className="container mx-auto ">
        {/* FIRST TEXT */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semi-bold mb-6">
            Subscribe & get up to 30% OFF
          </h1>

          <form className="flex flex-col sm:flex-row justify-center items-center  grid-cols-2 gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#ffffff] rounded-full  grid-cols-2 gap-5 py-4 px-10
              border-2 border-[#45c9a1]"
            />
            <button className="rounded-full bg-[#45c9a1] text-white py-4 px-10 grid-cols-2 gap-5 ">
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-sm">
          {/* BRAND INFO */}
          <div className="space-y-3">
            <img src={Logo} />
            <p>
              Offering a unique and stylish perspective on fashion is our number
              one priority. Confuse your mirror by our trendy outfits.
            </p>
          </div>
          {/* STORE LINK */}
          <div className="py-5 px-10">
        <h1 className="text-1.5xl font-bold mb-6 " >Store</h1>
        <ul className="space-y-2 ">
            <li>Women's Fashion</li>
             <li>Men's Fashion</li>
              <li>Store Sale</li>
               <li>Collection</li>
        </ul>
          </div>
          {/* HELP LINKS */}
            <div className="py-5 px-10">
        <h1 className="text-1.5xl font-bold mb-6 ">Help</h1>
        <ul className="space-y-2 ">
            <li>Customer Support</li>
             <li>Terms & Condition</li>
              <li>Privacy & Policy</li>
               <li>Track Your Order</li>
        </ul>
          </div>
          {/* CONTACT lINK */}
             <div className="py-2 px-5">
        <h1 className="text-1.5xl font-bold mb-6 ">Contact Us</h1>
        <ul className="space-y-2 ">
            <li className="flex gap-3"><img src={Email}className="w-[20px]"/>contact@clozzet.com</li>
             <li className="flex gap-3" ><img src={Phone}className="w-[20px]"/>254-700-333-333</li>
              <li className="font-light p-3">Follow Us</li>
        </ul>
          <div className="pt-5 pb-8 flex gap-2 mx-auto">
            <img src={Face} className="w-5"/>
            <img src={Insta} className="w-5"/>
            <img src={Twit} className="w-5"/>
          </div>
          </div>
        

        </div>
      </div>
    </footer>
  );
}
export default Footer;
