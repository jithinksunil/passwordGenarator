import React, { useContext } from 'react'
import CommonForm from './subComponents/CommonForm'
import { login } from '../api/user/createPassword'
import { MyContext } from '../store/Context'

function Login({closeLoginUpModalFunction}) {
    const {setLoading,setUserLoggedIn}=useContext(MyContext)
    const handleLogin = (formData)=>{
        setLoading(true)
        login(formData).then((res)=>{
            const {message,user,accessToken}=res.data
            setUserLoggedIn(user)
            sessionStorage.setItem('accessToken',accessToken)
            closeLoginUpModalFunction()
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
          placeHolder: "password"
        }
      ]
  return (
    <CommonForm
    formName={'Login'}
    submitButton={'Login'}
    fieldArray={fieldArray}
    submitFunction={handleLogin}
    />
  )
}

export default Login