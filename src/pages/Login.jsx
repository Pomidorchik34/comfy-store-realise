import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [abled, setAbled] = useState(false);
  let username = useRef("");
  let password = useRef("");
  let nav = useNavigate();
  function clicked(event) {
    if (username.current.value == "" || password.current.value == "") {
      alert("please fill in all inputs");
      return;
    }
    if (username.current.value.length <= 3) {
      alert("name is too short name must be more than three characters");
      return;
    }

    setAbled(true);
    fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          alert(data.message);
          return;
        }
        localStorage.setItem("token", data.accessToken);
        alert(JSON.stringify("succes"));
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAbled(false);
      });
  }
  return (
    <div className="h-screen grid place-items-center">
      <div className="w-96 h-[484px] flex justify-center shadow-lg items-center rounded-[14px]">
        <form className="form flex flex-col gap-4">
          <h4 className="text-3xl font-bold text-center">Login</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col w-[320px]">
              <span className="label-text capitalize mb-2" ref={username}>
                Username
              </span>
              <input type="text" className="input input-bordered undefined" />
            </li>
            <li className="flex flex-col w-[320px] mb-8">
              <span className="label-text capitalize mb-2" ref={password}>
                Password
              </span>
              <input
                type="password"
                className="input input-bordered undefined"
              />
            </li>
          </ul>
          <button onClick={clicked} className="btn btn-primary w-[320px]">
            LOGIN
          </button>
          <Link to="/" className="btn btn-primary w-[320px]">
            GUST USER
          </Link>
          <p className="text-center">
            Not a member yet? <Link to="/Register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
