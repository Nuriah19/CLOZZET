import { Link } from "react-router";
import { useState } from "react";
import img from "../assets/images/google.png";
import bg from "../assets/images/login.png";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
function Login() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] flex flex-col justify-center px-6 sm:px-12 lg:px-8 xl:px-12 py-8">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Login Your Account
        </h1>

        <form className="w-full space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
            onChange={(e) => handleChange(e)}
          />

          <div className="flex items-center pr-4 w-full  rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition">
            <input
              type={showPassword?"text":"password"}
              placeholder="Password"
              name="password"
              required
              className=" flex-1 px-4 py-3 outline-none"
              onChange={(e) => handleChange(e)}
            />
            <div onClick={()=>setShowPassword(!showPassword)} className=" ">{showPassword ? <EyeOff /> : <Eye />}</div>
          </div>

          <div className="flex item-center justify-between text-x5">
            <label className="flex item-center gap-2 text-gray-700 cursor-poitner">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="text-emerald-400 hover:text-emerald-600">
              Forgot Password
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-sm py-3 rounded-full transition duration-300 mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="text-xs font-bold text-black">OR</span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-4 py-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition"
        >
          <img src={img} alt="Google" className="w-5 h-5" />
          Login In with Google
        </button>

        <p className="text-center text-xs text-gray-700 mt-5">
          Dont have An Account ?{" "}
          <Link to="/Signup">
            <span className="text-emerald-500 hover:text-emerald-600 cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </div>

      <div className="hidden lg:block lg:w-[40%] h-screen p-1">
        <img src={bg} className="w-200 h-200 object-cover" />
      </div>
    </div>
  );
}
export default Login;
