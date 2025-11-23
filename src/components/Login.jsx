import React, { useRef } from "react";
import Header from "./Header";
import checkValidation from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import {PHOTO_URL , NETFLIX_LOGO} from '../utils/constants'

const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleIsRegistered = () => {
    setIsRegistered(!isRegistered);
  };


  const handleClick = (e) => {
    e.preventDefault();
    setMessage(checkValidation(email.current.value, password.current.value));
    console.log("message", message)
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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const {uid, displayName, email, photoURL} = auth.currentUser;
              console.log("reached here in signed up ")
              dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL}))
            })
            .catch((error) => {
              setMessage(error.message);
            });
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
        src={NETFLIX_LOGO}
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
              ref = {name}
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
          <p className="p-2 m-2 text-red-700 font-bold w-3/4">
            {message && message}
          </p>
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
