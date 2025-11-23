import React from 'react'

const checkValidation = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  if(!isEmailValid) return "Invalid Email";
  if(!isPasswordValid) return "Invalid Password"
  return null;
}

export default checkValidation
