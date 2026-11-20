import { Link } from "react-router";
import { useState, useContext } from "react";
import { stateContext } from "../context/State";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,} from "firebase/auth";
import img from "../assets/images/google.png";
import bg from "../assets/images/signup.png";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router";
function Signup() {
  const { cart, setCart } = useContext(stateContext);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSignUp(e) {
    e.preventDefault();

    const errors = {};
    (!formData.firstName || formData.firstName === "") &&
      (errors.firstName = true);
    (!formData.lastName || formData.lastName === "") &&
      (errors.lastName = true);
    (!formData.email || formData.email === "") && (errors.email = true);
    (!formData.password || formData.password === "") &&
      (errors.password = true);
    (!formData.confirmPassword || formData.confirmPassword === "") &&
      (errors.confirmPassword = true);
    (!formData.phoneNumber || formData.phoneNumber === "") &&
      (errors.phoneNumber = true);

    console.log(errors);
    console.log(formData);

    setFormErrors(errors);
    // AUTHENTICATION
    if (Object.keys(formErrors).length === 0) {
      const { email, password } = formData;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signup
          const user = userCredential.user;
          
          if (user) navigate("/login");
          console.log(user);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] flex flex-col justify-center px-6 sm:px-12 lg:px-8 xl:px-12 py-8">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Create An Account
        </h1>
        <p className="font-semibold text-center text-xs text-red-400 mb-2 mt-1 pr-4 ">
          {Object.keys(formErrors).length !== 0
            ? "Please fill out this field"
            : null}
        </p>
        <form className="w-full space-y-4" onSubmit={(e) => handleSignUp(e)}>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={`w-full ${formErrors.firstName ? "border-red-300" : "border-gray-200"} px-4 py-3 rounded-full border shadow-sm text-sm outline-none  focus:ring-2 focus:ring-emerald-100 transition`}
              onChange={(e) => handleChange(e)}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={`w-full ${formErrors.lastName ? "border-red-300" : "border-gray-200"}px-4 py-3 rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition`}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`w-full ${formErrors.email ? "border-red-300" : "border-gray-200"} px-4 py-3 rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition`}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className={`w-full ${formErrors.phoneNumber ? "border-red-300" : "border-gray-200"} px-4 py-3 rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition`}
            onChange={(e) => handleChange(e)}
          />
          <div className="flex items-center pr-4 w-full  rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={`flex-1 px-4 py-3 outline-none ${formErrors.password ? "border-red-300" : "border-gray-200"}`}
              onChange={(e) => handleChange(e)}
            />
            <div onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye /> : <EyeOff />}
            </div>
          </div>

          <div className="flex items-center pr-4 w-full  rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition">
            <input
              type={confirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`flex-1 px-4 py-3 outline-none ${formErrors.confirmPassword ? "border-red-300" : "border-gray-200"}`}
              onChange={(e) => handleChange(e)}
            />
            <div onClick={() => setConfirmPassword(!confirmPassword)}>
              {confirmPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-sm py-3 rounded-full transition duration-300 mt-2"
          >
            Create Account
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
          Sign up with Google
        </button>

        <p className="text-center text-xs text-gray-700 mt-5">
          Already Have An Account?{" "}
          <Link to="/Login">
            <span className="text-emerald-500 hover:text-emerald-600 cursor-pointer">
              Log In
            </span>
          </Link>
        </p>
      </div>

      <div className="hidden lg:block lg:w-[40%] h-screen">
        <img
          src={bg}
          alt="Fashion signup illustration"
          className="w-200 h-200 object-cover"
        />
      </div>
    </div>
  );
}
export default Signup;
