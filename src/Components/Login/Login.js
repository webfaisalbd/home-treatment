import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {loginWithGoogle,user,createUserWithEmailAndPassword } = useFirebase();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();

  const auth=getAuth();

    const handleEmailChange=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
}

const handlePasswordChange=(e)=>{
    e.preventDefault();
    setPassword(e.target.value);
}

const handleRegistration= () =>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        console.log(result.user);
    })
}
    
    return (
        <div>
        <p>this is login page  </p>
        <img src={user.photoURL} alt="" /> 
        <p>user name:  </p> <h3> {user.displayName} </h3>
        <p>user email: </p>  <h3> {user.email}</h3>
        
        <input onBlur={handleEmailChange} className="mt-2" type="email" name="" id="" placeholder="enter your email"/>
        <br /> 
        <input onBlur={handlePasswordChange} className="mt-2" type="password" name="" id="" placeholder="enter your password"/>
        <br />

        <button onClick={loginWithGoogle}  className="mt-2">Sign in With Google</button>
        <button onClick={handleRegistration}  className="mt-2">email pass button</button>

        </div>
    );


};

export default Login;