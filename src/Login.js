import React from 'react'; 
import "./Login.css"

function Login() {
  const signIn = ()  =>{
    //sign in ...
  }
  return <>
  <div className="login">
    <h1>This is login page</h1>
    <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" alt="" />
        <img src="" alt="" />
    </div>
    <button className="btn btn-primary" type="submit" onClick={signIn}>Sign In</button>
  </div>
  </>
}

export default Login