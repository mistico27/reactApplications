import {React} from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import './login.css'


export const LoginComponent =() =>{
    const navigate = useNavigate();
    const {handleSubmit,register,formState:{errors}} =useForm();

    const onsubmit=(data)=>{
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: data.username,
              password: data.password,
            
    }),
    }).then((response) => response.json())
    .then((response) => {
      console.log("response Bienvenido ", response);
      if(response?.token){
        localStorage.setItem('token',response?.token)
        navigate("/")
    }else{
        alert("aun no puedes entrar, identificate bro...");
    }
    })
    .catch(() => {
      alert("fallo el fetch :c");
    });
    
    }
    
    
    return(
<div className='login'>
<div className="loginWrapper">
    <div className="loginLeft">
        <h3 className="loginLogo">
            New App 06072023
        </h3>
        <span className='loginDesc'>
            Getting stronger
        </span>
    </div>
    <div className="loginRight">
        <form className="loginBox" onSubmit={handleSubmit(onsubmit)}>
            <input placeholder='Email' required
             className="loginInput" {...register('username',{required:{value:true, message:"correo requerido"}})} />
            <input placeholder='Password' required minLength={"4"} type="Password"
             className="loginInput" {...register('password',{required:{value:true, message:"password requerido"}})} />
            <button className='loginButton' type="submit" >Enter</button>
            <span className='loginForgot'>forgot Password??</span>
            <button className="loginRegisterButton">Create a New Account</button>
        </form>
    </div>
</div>
</div>
    )
}