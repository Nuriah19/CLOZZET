import { useState } from "react";
import { Link } from "react-router";
function Add() {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const errors = {};
    (!formData.productName || formData.productName === "") &&
      (errors.productName = true);
    (!formData.price || formData.price === "") && (errors.price = true);
    (!formData.categrory || formData.categrory === "") &&
      (errors.categrory = true);
    (!formData.image || formData.image === "") && (errors.image = true);
    console.log(errors);
    console.log(formData);

    setFormErrors(errors);
  }

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-115">
        <h1 className="text-2xl font-bold text-center text-black mb-3">
          Add New Product
        </h1>
        <Link to="/dashboard">
          <p className="text-xs text-teal-400">←Back To Dashboard</p>
        </Link>
        <p className="font-semibold text-center text-xs text-red-400 mb-2 mt-1 pr-4 ">
          {Object.keys(formErrors).length !== 0
            ? "Please fill out this field"
            : null}
        </p>
        <div className="border border-gray-200 rounded-sm px-6 sm:px-11 py-6">
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              className={`w-full ${formErrors.email ? "border-red-300" : "border-gray-200"}px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition`}
              onChange={(e) => handleChange(e)}
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              min="0"
              className={`w-full ${formErrors.email ? "border-red-300" : "border-gray-200"} px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition`}
              onChange={(e) => handleChange(e)}
            />

            <select
              name="category"
              defaultValue=""
              className={`w-full ${formErrors.email ? "border-red-300" : "border-gray-200"} px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition bg-white`}
              onChange={(e) => handleChange(e)}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
            </select>

            <div className="flex flex-wrap items-center gap-3">
              <label className="w-full sm:w-50 px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs text-gray-400 cursor-pointer hover:bg-gray-50 transition">
                Upload Product Image
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className={`hidden ${formErrors.email ? "border-red-300" : "border-gray-200"}`}
                  onChange={(e) => handleChange(e)}
                />
              </label>

              <span className="text-xs text-gray-400">No File Chosen</span>
            </div>

            <textarea
              placeholder="Detailed Product Description"
              rows="7"
              className="w-full px-5 py-4 border border-gray-200 rounded-md shadow-sm text-xs outline-none resize-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
            />

            <div className="flex justify-center pt-1">
              <button
                type="submit"
                className="w-full sm:w-49 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-sm py-3 rounded-full transition duration-300"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Add;
