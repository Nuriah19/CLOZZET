import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Notfound from "../pages/Notfound";
import Layout from "../pages/Layout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { stateContext } from "../context/State";
import Dashboard from "./admin/Dashboard";
import Week from "./admin/Week";
import Customer from "./admin/Customer";
import Sales from "./admin/Sales";
import Add from "./admin/Add";
import Products from "./admin/Products";
import Settings from "./admin/Settings";
import Sidebar from "./admin/Sidebar";
import Single from "../pages/Single";
import Aboutus from "../pages/Aboutus";
import Shop from "../pages/Shop"

function Router() {
  const { cart, setCart } = useContext(stateContext);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      setCart(cartItems);
    }
  }, []);
  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Notfound />
            </Layout>
          }
        />
        <Route
          path="/signUp"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/single"
          element={
            <Layout>
              <Single />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/add"
          element={
            <Layout>
              <Add />
            </Layout>
          }
        />
        <Route path="/customer" element={<Customer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/week" element={<Week />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
