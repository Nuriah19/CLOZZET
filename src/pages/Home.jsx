import Nav from "../componets/Nav";
import Hero from "../componets/Hero";
import Footer from "../componets/Footer";
import Catergories from "../componets/Categories";
import Collection from "../componets/Collections";
function Home() {
  return (
    <>
      <header className="bg-[url(../../src/assets/images/hero-background.png)] bg-no-repeat bg-right bg-contain">
        <Nav />
        <Hero />
    
      <main>
      <Catergories/>
      <Collection/>
         </main>
      <Footer />
          </header>
     
    </>
  );
}
export default Home;
