import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const [products, setProducts] = useState({ data: [] });
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
    console.log(products);
  }, []);
  function onClicked(event) {
    console.log(event.target.id);
    localStorage.setItem("id", event.target.id);
    navigate("/products/details");
  }
  return (
    <>
      <div className="container-home mx-24 py-20 flex justify-between">
        <div className="text items-center justify-center">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl pt-10">
            We are changing <br /> the way people <br /> shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <a className="btn btn-primary" href="/products">
              Our Products
            </a>
          </div>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 ">
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
              loading="lazy"
              width={320}
              height={416}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
              className="rounded-box"
              loading="lazy"
              width={320}
              height={416}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
              className="rounded-box"
              loading="lazy"
              width={320}
              height={416}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
              className="rounded-box"
              loading="lazy"
              width={320}
              height={416}
            />
          </div>
        </div>
      </div>
      <div className="container-home mx-24 py-20 flex">
        <div className="border-b border-base-300 pb-5 block">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            featured products
          </h2>
        </div>
      </div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-24 p-20">
        {products.data.map((value, index) => {
          return (
            <div
              onClick={onClicked}
              key={value.id}
              id={value.id}
              className="card flex items-center gap-4"
            >
              <img
                id={value.id}
                src={value.attributes.image}
                alt=""
                className="rounded-xl h-64 mt-4 md:h-48 object-cover"
              />

              <h2
                id={value.id}
                className="card-title capitalize tracking-wider pt-4"
              >
                {value.attributes.title}
              </h2>
              <span id={value.id}>{value.attributes.price / 100 + "$"}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
