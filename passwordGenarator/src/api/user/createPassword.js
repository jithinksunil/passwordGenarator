import axiosInstance from "../instance";

export const createPassword = (constrainObject) =>
  axiosInstance.post("/genarate/password",constrainObject)

export const signUp=(formData)=>
  axiosInstance.post('/auth/signup',formData)

export const login=(formData)=>
  axiosInstance.post('/auth/login',formData)
