import background from "../assets/images/hero-background.png";
import Hero from "../componets/Hero";

import Catergories from "../componets/Categories";
import Collection from "../componets/Collections";
import Casuals from "../componets/Casuals"
function Home({cart,setCart}) {
  return (
    <>
      <header>
        <img src={background} className="absolute right-0 -top-2.5 z-[-1]" />
        <Hero />
      </header>

      <main>
        <Catergories />
        <Collection cart={cart} setCart={setCart}/>
        <Casuals/>
      </main>
    </>
  );
}
export default Home;
