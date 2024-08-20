import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  return (
    <>
      <div className="align-element py-20 mx-[183px]">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            Shopping Cart
          </h2>
        </div>
      </div>
      <div className="products mx-[183px] flex justify-center flex-column">
        {product.map((value, index) => {
          return (
            <div>
              <img src={value.product.image} alt="" />
              <div class="sm:ml-16 sm:w-48">
                <h3 class="capitalize font-medium">{value.product.title}</h3>
                <h4 class="mt-2 capitalize text-sm text-neutral-content">
                  {value.product.company}
                </h4>
              </div>
              <div class="sm:ml-12">
                <div class="form-control max-w-xs">
                  <label for="amount" class="label p-0">
                    <span class="label-text">Amount</span>
                  </label>
                  <select
                    name="amount"
                    id="amount"
                    class="mt-2 select select-base select-bordered select-xs"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <button
                  id={index}
                  onClick={(e) => {
                    product.filter((value) => {
                      return index != product.indexOf(value);
                    });
                    localStorage.setItem("cart", product);
                  }}
                  class="mt-2 link link-primary link-hover text-sm"
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
