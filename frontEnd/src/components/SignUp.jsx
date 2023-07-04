import React, { useContext } from 'react'
import CommonForm from './subComponents/CommonForm'
import { signUp } from '../api/user/createPassword'
import { MyContext } from '../store/Context'

function SignUp({ openLoginModalFunction, closeSignUpModalFunction }) {
    const {setLoading}=useContext(MyContext)
    const handleSignUp = (formData)=>{
        setLoading(true)
        signUp(formData).then((res)=>{
            const {message}=res.data
            closeSignUpModalFunction()
            openLoginModalFunction()
            alert(message)
        }).catch((err)=>{
            alert(err.response.data.message)
        }).finally(()=>setLoading(false))

    }
    const fieldArray=[
        {
          field: "email",
          required: true,
          type: "email",
          validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          placeHolder: "Email",
        },
        {
          field: "password",
          required: true,
          type: "password",
          validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          placeHolder: "New password",
          compareId: "Passwords",
        },
        {
          field: "confirmPassword",
          required: true,
          type: "text",
          validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          placeHolder: "Confirm password",
          compareId: "Passwords",
        },
      ]
  return (
    <CommonForm
    formName={'Sign up'}
    submitButton={'Sign up'}
    fieldArray={fieldArray}
    submitFunction={handleSignUp}
    />
  )
}

export default SignUp