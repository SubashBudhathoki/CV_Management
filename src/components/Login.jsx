import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setAdmin } from "../features/Adduser/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const [fvalue, setFvalue] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  //   const userEmail = localStorage.getItem("email")
  //     ? localStorage.getItem("email")
  //     : "admin@gmail.com";
  //   const userPassword = localStorage.getItem("Password")
  //     ? localStorage.getItem("Password")
  //     : "admin";
  //eve.holt@reqres.in
  //cityslicka

  const handleChange = (e) => {
    setFvalue({ ...fvalue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", fvalue.email);
    localStorage.setItem("password", fvalue.password);
    // if (fvalue.email === userEmail && fvalue.password === userPassword) {
    // } else {
    //   prompt("Enter Correct Validation");
    // }
    axios
      .post("https://reqres.in/api/login", {
        email: fvalue.email,
        password: fvalue.password,
      })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      });
  };
  return (
    <>
      <div className="bg-[url('https://static2.gensler.com/uploads/hero_element/6461/thumb_mobile/thumbs/confidential-medical-devices_large_02_1430781039_508x286.jpg')] bg-black bg-opacity-70 bg-blend-multiply bg-cover bg-no-repeat">
        <div
          className="flex justify-center items-center p-12"
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   padding: "3rem",
          // }}
        >
          <form
            action=""
            className="flex flex-col gap-8"
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   gap: "2rem",
            // }}
          >
            <div>
              <h2 className="text-white">Login In</h2>
            </div>
            <div
              className="flex flex-col gap-4"
              // style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  className="w-[100%] h-12 border-none pl-4 box-border"
                  // style={{
                  //   width: "100%",
                  //   height: "3rem",
                  //   border: "none",
                  //   paddingLeft: "1rem",
                  //   boxSizing: "border-box",
                  // }}
                  name="email"
                  value={fvalue.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[100%] h-12 border-none pl-4 box-border"
                  // style={{
                  //   width: "100%",
                  //   height: "3rem",
                  //   border: "none",
                  //   paddingLeft: "1rem",
                  //   boxSizing: "border-box",
                  // }}
                  name="password"
                  value={fvalue.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              className="flex flex-col gap-4"
              // style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <button
                  className="w-[100%] h-12 border-none text-white bg-red-700"
                  // style={{
                  //   color: "white",
                  //   backgroundColor: "red",
                  //   width: "100%",
                  //   height: "3rem",
                  //   border: "none",
                  // }}
                  onClick={handleSubmit}
                >
                  Login In
                </button>
              </div>

              <div
                className="flex justify-between"
                // style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-white">Remember Me</span>
                </div>
                <div>
                  <span className="text-white">Need help?</span>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 mt-16"

              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "1rem",
              //   marginTop: "4rem",
              // }}
            >
              <div>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const details = jwt_decode(credentialResponse.credential);
                    console.log(details);
                    dispatch(setAdmin(details));
                    console.log(credentialResponse);
                    navigate("/dashboard");
                  }}
                  text="Sign in with Google"
                  size="large"
                  shape="rectangular"
                  width={350}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
              <div>
                <span className="text-white">
                  <Link to="/Signup">
                    <span className="cursor-pointer">Sign up</span> now.
                  </Link>
                </span>
              </div>
              <div className="mb-20">
                <span className="text-white">
                  This page is protected by Google reCAPTCHA to <br />
                  ensure you're not a bot. Learn more.
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
