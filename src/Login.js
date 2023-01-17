import React from 'react'; 
import "./Login.css"
import {auth, provider}  from "./firebase"


function Login() {
  const signIn = ()  =>{
    //sign in ...
    auth.signInWithPopup(provider).then((result) =>{
      console.log(result);
    }).catch((error)=>alert(error.message));
  };
  return <>
  <div className="login">
    
    <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" alt="" />
        <img src="" alt="" />
    </div>
    <button className="btn btn-primary" type="submit" onClick={signIn}>Sign In</button>
  </div>
  </>
}

export default Login