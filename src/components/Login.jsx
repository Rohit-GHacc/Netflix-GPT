import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
        <Header/>
      <img className = 'absolute' src = 'https://assets.nflxext.com/ffe/siteui/vlv3/a92ac6d9-e542-40d5-9bb1-bb7291e4de86/web/IN-en-20251117-TRIFECTA-perspective_9fe28c81-2209-4e08-b8bd-98cfa9f97a8f_large.jpg'/>
      <div className = 'w-full absolute inset-0 bg-black/40  '></div>
      <form className = 'bg-black/75 absolute w-1/3 text-white top-1/6 left-1/3 py-10 rounded-lg'> 
        <h1 className = 'text-white ml-13 mb-5 p-2 text-3xl font-bold px-[1/4]'> Sign In</h1>
        <div className = 'flex flex-col items-center'>
        <input type = 'text' placeholder= 'Email or mobile number' className = 'p-4 m-4 bg-gray-900 opacity-50 rounded-sm w-3/4 mx-auto px-auto border border-gray-500'/>
        <input type = 'password' placeholder= 'Password' className = 'p-4 m-4   bg-gray-900 opacity-50 border border-gray-500 rounded-sm w-3/4 mx-auto px-auto'/>
        <button className = 'bg-red-700 p-4 w-3/4 m-4'> Sign In</button>
        <h3 className = 'text-white '> Forgot Password? </h3>
        </div>
        <div className = 'text-white ml-15 my-5'> New to Netflix? Sign up now.</div>
      </form>
    </div>
  )
}

export default Login
