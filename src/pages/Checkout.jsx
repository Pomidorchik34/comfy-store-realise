import React, { useEffect, useState } from "react";

function Checkout() {
  const [price, setPrice] = useState(localStorage.getItem("cart") && []);
  const [chkPrice, setChkPrice] = useState(0);
  useEffect(() => {
    let CopiedPrice = 0;
    price.forEach((value) => {
      CopiedPrice += value.price;
    });
    setChkPrice(price);
  }, []);
  return (
    <div className="mx-[183px] px-[32px]">
      <section className="py-20">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            place your order
          </h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          <form
            method="post"
            action="/checkout"
            className="flex flex-col gap-y-4"
          >
            <h4 className="font-medium text-xl capitalize">
              shipping information
            </h4>
            <div className="form-control">
              <label for="name" className="flex">
                <span className="label-text capitalize">first name</span>
              </label>
              <input type="text" className="input input-bordered undefined" />
            </div>
            <div className="form-control">
              <label for="address" className="flex">
                <span className="label-text capitalize">address</span>
              </label>
              <input type="text" className="input input-bordered undefined" />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary btn-block">
                place your order
              </button>
            </div>
          </form>
          <div className="bg-blue-100 rounded-2xl w-[528px]">
            <div className="card-body w-[528px]">
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Subtotal</span>
                <span className="font-medium">$679.98</span>
              </p>
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Shipping</span>
                <span className="font-medium">$5.00</span>
              </p>
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Tax</span>
                <span className="font-medium">$68.00</span>
              </p>
              <p className="flex justify-between text-sm mt-4 pb-2">
                <span>Order Total</span>
                <span className="font-medium">$752.98</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
