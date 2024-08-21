import { data } from "autoprefixer";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Details() {
  const [id, setId] = useState(localStorage.getItem("id"));
  const [product, setProduct] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    if (id == null) {
      navigate("/products");
    } else {
      fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data.data.attributes))
        .catch((err) => console.log(err));
    }
  }, []);
  useEffect(() => {
    console.log(product);
  }, [product]);
  let amount = useRef("");
  function ToLocalStorage(event) {
    notify;
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      cart.push({
        id: id,
        product: product,
        amount: amount.current.value,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart.push({
        id: id,
        product: product,
        amount: amount.current.value,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  const notify = () => toast("Added to cart");
  return (
    <div className="mx-[183px] py-20">
      <div className="flex flex-col md:flex-row p-6 bg-background rounded-lg ">
        <div className="md:w-1/2">
          <img
            src={product.image}
            width={512}
            height={384}
            alt="Chic Chair"
            className="h-[384px] rounded-lg w-[512px]"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="capitalize text-3xl font-bold">{product.title}</h2>
          <h3 className="text-xl text-neutral-content font-bold mt-2">
            {product.company}
          </h3>
          <p className="text-lg font-semibold mt-4">
            {product.price / 100 + "$"}
          </p>
          <p className="mt-6 leading-8">{product.description}</p>
          <div className="mt-2"></div>
          <div className="mt-4">
            <label htmlFor="amount" className="block font-semibold text-muted">
              Amount
            </label>
            <select
              id="amount"
              ref={amount}
              className="mt-1 p-2 border border-border rounded-md w-[320px] h-[48px]"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <button
            onClick={ToLocalStorage}
            className="btn btn-secondary btn-md mt-8"
          >
            ADD TO BAG
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Details;
