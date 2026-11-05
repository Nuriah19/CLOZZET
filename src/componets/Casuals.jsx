import Casual from "./Casual";

import mens from "../assets/images/mens.png";
import watch from "../assets/images/watches.png";
 import bag from "../assets/images/hbags.png";
import dress from "../assets/images/ladies.png";

function Casuals() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MENS COLLECTION */}
        <div className="bg-[#f1f1f0] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
          <div className="w-20 h-30 flex items-center justify-center">
            <Casual
              image={mens}
              titles="Men's Collection"
              subtitle="Casual Price"
            />
          </div>
        </div>
        {/* LUXURY WATCHES */}
        <div className="bg-[#E6F9FB] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
          <div className="w-20 h-30 flex items-center justify-center">
            <Casual
              image={watch}
              title="Luxury Watches"
              subtitle="Casual Price"
            />
          </div>
        </div>
         {/* DESIGNER HANDBAG */}
        <div className="bg-[#FFF1F1] p-8 rounded-lg flex items-center justify-between relative overflow-hidden">
          <div className="w-20 h-30 flex item-center justify-center">
            <Casual image={bag} title="Designer Bag" subtitle="Casual Price" />
          </div>
        </div>
            {/* LADIES COLLETION */}
        <div className="flex bg-[#FBDEDD] p-8 rounded-lg items-center justify-between relative overflow-hidden">
          <div className=" flex w-9 h-3  items-center justify-center">
            <Casual image={dress} title="Ladies Collection" subtitle="Casual Price"/>
          </div>
        </div> 
      </div>
    </section>
  );
}
export default Casuals;
