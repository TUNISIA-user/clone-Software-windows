import React, { useEffect } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
 const Navigate = useNavigate()
 const speed =  3000

 useEffect(()=>{

    setTimeout(()=>{
        Navigate("/LoginFireBase1")
     },speed)
    

 },[])
 


  return (
    <div className="window">
    <div className="logo">
      <p className="top">Microsoft</p>
      <br></br>
      <p className="mid">Windows<span>10</span></p>
      <br></br>
      <p className="bottom">Professional</p>
    </div>
    <div className="container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  </div>
  )
}

export default Login