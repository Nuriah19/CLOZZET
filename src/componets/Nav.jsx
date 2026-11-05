import { Link } from "react-router";
import Logo from "../assets/images/logo.svg";

const cartIcon = (
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
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

function Nav({cart}) {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between align-center">
          <ul className="flex justify-between align-center">
            <li>
              <Link to="/">
                <img src={Logo} />
              </Link>
            </li>
            <Link to="/">
              <li className=" mx-8 py-8">Home</li>
            </Link>
            <li className=" mx-8 py-8">About Us</li>
            <li className=" mx-8 py-8">Shop</li>
          </ul>
          <ul className="flex justify-between align-center">
            <Link to="/cart">
              <li className="mx-4 py-8 relative">
                {cartIcon}
                <span className="absolute bottom-11 -right-2 size-16 bg-teal-500 rounded-full w-5 h-5 text-white px-2 flex justify-center items-center">
                  {cart.length}
                </span>
              </li>
            </Link>
            <li className="mx-8 py-8">Sign up</li>
            <li className=" mx-8 py-8">Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
