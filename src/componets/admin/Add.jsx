



function Add(){
    return(
    <div className="min-h-screen w-full bg-white flex justify-center items-center px-4 py-10">

      {/* Main Container */}
      <div className="w-full max-w-115">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-black mb-3">
          Add New Product
        </h1>

        {/* Product Form Container */}
        <div className="border border-gray-200 rounded-sm px-6 sm:px-11 py-6">

          <form className="space-y-4">

            {/* Product Name */}
            <input
              type="text"
              placeholder="Product Name"
              required
              className="w-full px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
            />

            {/* Price */}
            <input
              type="number"
              placeholder="Price"
              min="0"
              required
              className="w-full px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
            />

            {/* Category */}
            <select
              required
              defaultValue=""
              className="w-full px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition bg-white"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
            </select>

            {/* Image Upload */}
            <div className="flex flex-wrap items-center gap-3">

              <label className="w-full sm:w-50 px-5 py-3.5 border border-gray-200 rounded-md shadow-sm text-xs text-gray-400 cursor-pointer hover:bg-gray-50 transition">
                Upload Product Image

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>

              <span className="text-xs text-gray-400">
                No File Chosen
              </span>

            </div>

            {/* Product Description */}
            <textarea
              placeholder="Detailed Product Description"
              rows="7"
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-md shadow-sm text-xs outline-none resize-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
            />

            {/* Add Product Button */}
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
        
        
    )
}
export default Add