import { useState } from "react";
import { Link } from "react-router";
function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      category: "Tops",
      price: 1200,
      stock: 25,
    },
    { id: 2, name: "Denim Jeans", category: "Bottoms", price: 2500, stock: 15 },
    {
      id: 3,
      name: "Summer Dress",
      category: "Dresses",
      price: 1800,
      stock: 10,
    },
    { id: 4, name: "Casual Hoodie", category: "Tops", price: 2200, stock: 8 },
    {
      id: 5,
      name: "Leather Handbag",
      category: "Accessories",
      price: 3000,
      stock: 12,
    },
    { id: 6, name: "Sneakers", category: "Shoes", price: 3500, stock: 5 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F1F1F0] p-4 sm:p-6 md:p-8">
      <header className="mb-8">
        <p className="text-sm font-medium">CLOZZET / ADMIN / PRODUCTS</p>
        <h1 className="text-3xl font-bold mt-2">Products</h1>
        <p className="mt-2">Manage and view your store inventory.</p>
      </header>

      <div className="bg-[#E6F9FB] p-5 rounded-xl mb-6 w-90">
        <Link to="/Dashboard">
          <h2 className="text-xl font-bold cursor-pointer ">
            Product Inventory
          </h2>
        </Link>
        <p className="mt-1">Total Products: {products.length}</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 p-3 rounded-lg border border-[#45C9A1] outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#FFF1F1] rounded-xl p-5 shadow-sm"
          >
            <div className="bg-[#E6F9FB] rounded-lg h-32 flex items-center justify-center mb-4">
              <span className="text-4xl">👕</span>
            </div>

            <h3 className="text-lg font-bold">{product.name}</h3>

            <p className="mt-1">{product.category}</p>

            <div className="flex justify-between items-center mt-4">
              <p className="font-bold">KSh {product.price.toLocaleString()}</p>

              <p className="text-sm">Stock: {product.stock}</p>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
}

export default Products;
