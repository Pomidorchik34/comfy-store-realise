import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Oreders from "./pages/Oreders";
import Products from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import MainLayout from "./layouts/mainLayout";
import Details from "./pages/Details";
import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext("");
export const USerContext = createContext("");

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  });
  return (
    <div>
      <USerContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <MainLayout>
                  <About />
                </MainLayout>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <MainLayout>
                  <Products />
                </MainLayout>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <MainLayout>
                  <Cart />
                </MainLayout>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {token && (
              <>
                <Route
                  path="/checkout"
                  element={
                    <MainLayout>
                      <Checkout />
                    </MainLayout>
                  }
                ></Route>
                <Route
                  path="/orders"
                  element={
                    <MainLayout>
                      <Oreders />
                    </MainLayout>
                  }
                ></Route>
              </>
            )}
            <Route path="*" element={<Error />}></Route>
            <Route
              path="/products/details"
              element={
                <MainLayout>
                  <Details></Details>
                </MainLayout>
              }
            ></Route>
          </Routes>
        </TokenContext.Provider>
      </USerContext.Provider>
    </div>
  );
}

export default App;
