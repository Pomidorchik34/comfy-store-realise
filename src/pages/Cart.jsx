import React, { useEffect, useRef, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  let amount = useRef("");
  console.log(amount.children);
  return (
    <>
      <div className="align-element py-20 pb-10 mx-[183px]">
        <div className="border-b border-base-300 pb-0">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            Shopping Cart
          </h2>
        </div>
      </div>
      <div className="cart-main flex gap-12">
        <div className="products mx-[183px] flex flex-column justify-start items-start flex-col gap-8">
          {cart.map((value, index) => {
            return (
              <div className="flex" key={index}>
                <img
                  className="h-[128px] rounded-[10px]"
                  src={value.product.image}
                  width={128}
                  height={128}
                  alt=""
                />
                <div className="sm:ml-16 sm:w-48">
                  <h3 className="capitalize font-medium">
                    {value.product.title}
                  </h3>
                  <h4 className="mt-2 capitalize text-sm text-neutral-content">
                    {value.product.company}
                  </h4>
                </div>

                <div className="sm:ml-12">
                  <div className="form-control max-w-xs">
                    <label for="amount" className="label p-0">
                      <span className="label-text">Amount</span>
                    </label>
                    <select
                      ref={amount}
                      name="amount"
                      id="amount"
                      className="mt-2 select select-base select-bordered select-xs w-[49px] ml-[98px]"
                    >
                      {cart.map((value) => {
                        for (let i = 0; value.amonut <= i; i++) {
                          if (i == value.amonut) {
                            <>
                              <option selected value={i}>
                                {i}
                              </option>
                            </>;
                          } else {
                            <>
                              <option value={i}>{i}</option>
                            </>;
                          }
                        }
                      })}
                    </select>
                  </div>
                  <button
                    id={value.id}
                    onClick={(e) => {
                      cart.filter((elem) => {
                        return value.id != elem.id;
                      });
                      localStorage.setItem("cart", JSON.stringify(cart));
                      location.reload();
                    }}
                    className="mt-2 link link-primary link-hover text-sm"
                  >
                    remove
                  </button>
                </div>
                <span>{"$" + (value.amount * value.product.price) / 100}</span>
              </div>
            );
          })}
        </div>
        <div className="order-total">
          <ul>
            <li>
              <span>Subtotal</span>
              <span>
                {cart.forEach((value) => {
                  price + value.product.price;
                })}
              </span>
            </li>
            <li>
              <span>Shipping</span>
              <span></span>
            </li>
            <li>
              <span>Tax</span>
              <span></span>
            </li>
            <li>
              <span>Order Total</span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cart;
