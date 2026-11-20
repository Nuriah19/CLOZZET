import { Link } from "react-router";
function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <nav className="w-[60%] bg-[#E6F9FB] px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">

        <div>
          <h2 className="text-xl font-bold text-black">CLOZZET</h2>
          <p className="text-sm text-black">Admin Panel</p>
        </div>

    
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link to="/dashboard" className="hover:text-[#45C9A1]">
            Dashboard
          </Link>

          <Link to="/Products" className="hover:text-[#45C9A1]">
            Products
          </Link>

          <Link to="/Orders" className="hover:text-[#45C9A1]">
            Orders
          </Link>

          <Link to="/Customer" className="hover:text-[#45C9A1]">
            Customers
          </Link>
        </div>
 
        
      </nav>
    </div>
  );
}

export default Navbar;
