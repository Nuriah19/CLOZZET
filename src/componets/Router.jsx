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
          path="/SignUp"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/Login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/Single"
          element={
            <Layout>
              <Single />
            </Layout>
          }
        />
        <Route
          path="/Aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/Shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
          path="/Add"
          element={
            <Layout>
              <Add />
            </Layout>
          }
        />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Week" element={<Week />} />
        <Route path="/Sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
