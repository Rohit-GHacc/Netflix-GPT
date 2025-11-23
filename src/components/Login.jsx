import React, { useRef } from "react";
import Header from "./Header";
import checkValidation from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const handleIsRegistered = () => {
    setIsRegistered(!isRegistered);
  };

  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    setMessage(checkValidation(email.current.value, password.current.value));
    if (message) return;

    if (!isRegistered) {
      // SIGN UP FORM
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //SIGN IN FORM
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a92ac6d9-e542-40d5-9bb1-bb7291e4de86/web/IN-en-20251117-TRIFECTA-perspective_9fe28c81-2209-4e08-b8bd-98cfa9f97a8f_large.jpg"
      />
      <div className="w-full absolute inset-0 bg-black/40  "></div>
      <form className="bg-black/75 absolute w-1/3 text-white top-1/6 left-1/3 py-10 rounded-lg">
        <h1 className="text-white ml-13 mb-5 p-2 text-3xl font-bold px-[1/4]">
          {" "}
          {isRegistered ? "Sign In" : "Sign Up"}{" "}
        </h1>
        <div className="flex flex-col items-center">
          {!isRegistered && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-4 bg-gray-900 opacity-50 rounded-sm w-3/4 mx-auto px-auto border border-gray-500"
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 m-4 bg-gray-900 opacity-50 rounded-sm w-3/4 mx-auto px-auto border border-gray-500"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 m-4   bg-gray-900 opacity-50 border border-gray-500 rounded-sm w-3/4 mx-auto px-auto"
            ref={password}
          />
          <p className="p-2 m-2 text-red-700 font-bold w-3/4">{message && message}</p>
          <button
            className="bg-red-700 p-4 w-3/4 m-4 rounded-lg cursor-pointer hover:bg-red-800"
            onClick={handleClick}
          >
            {" "}
            {isRegistered ? "Sign In" : "Sign Up"}
          </button>
          <h3 className="text-white "> Forgot Password? </h3>
        </div>
        <div
          className="text-white ml-15 my-5 cursor-pointer"
          onClick={handleIsRegistered}
        >
          {isRegistered
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
