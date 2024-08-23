import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  let nav = useNavigate();
  const [abled, setAbled] = useState(false);
  let username = useRef("");
  let email = useRef("");
  let password = useRef("");

  function clicked(event) {
    if (
      username.current.value == "" ||
      email.current.value == "" ||
      password.current.value == ""
    ) {
      alert("please fill in all inputs");
      return;
    }
    if (username.current.value.length <= 3) {
      alert("name is too short name must be more than three characters");
      return;
    }
    if (email.current.value.includes("@")) {
    } else {
      alert("please corect your email");
      return false;
    }

    setAbled(true);
    fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Failed! Username is already in use!") {
          return;
        }
        if (data.message == "Failed! Email is already in use!") {
          return;
        }
        alert(JSON.stringify(data.message));
        nav("/login");
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
          <h4 className="text-3xl font-bold text-center">Register</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col w-[320px]">
              <span className="label-text capitalize mb-2" ref={username}>
                Username
              </span>
              <input type="text" className="input input-bordered undefined" />
            </li>
            <li className="flex flex-col w-[320px]">
              <span className="label-text capitalize mb-2" ref={email}>
                Email
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
          <button className="btn btn-primary w-[320px]">REGISTER</button>
          <p className="text-center">
            Alerady member? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
