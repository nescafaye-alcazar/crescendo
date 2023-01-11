import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { logo } from "../assets";
import './Login.css';

function Login() {
  document.title = "Crescendo | Login";
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
  setPasswordShown(passwordShown ? false : true);
};

  const [name, setName] = useState("");
  const getName = event => {
    setName(event.target.value);
    console.log("name: " + event.target.value);
  }

  return (
    <>
      <div className="login">
        <div className='login-content'>
          <div className="login_head">
            <h1 className='font-bold text-5xl text-black text-left'>Welcome Back</h1>
            <p className='font-bold text-3xl text-white text-left'> Login </p>
          </div>
          <div style={{ marginTop: '2.5em' }}>
            <form>
              <div className="inputs text-2xl">
                <input type="text" id="username" name="name" value={name} onChange={getName} required />
                <span>Username</span>
              </div>
              <div className="inputs text-2xl">
                <input type={passwordShown ? "text" : "password"} id="password" required />
                <span>Password</span>
                <i className="eye mr-5" onClick={togglePasswordVisiblity}><AiOutlineEye /></i>
              </div>
              <div>
                <input type="checkbox" id="rememberMe" style={{ cursor: 'pointer', height: '25px', width: '25px' }} />
                <label for="rememberMe" style={{ cursor: 'pointer', marginLeft: '8px', marginy: '10px' ,verticalAlign: 'top', fontSize: '23px'}}>Remember me</label>
              </div>
              <button onClick={() => { navigate("/homepage")}} className='form_button w-40'><p className='text-xl'>Log in</p></button>
            </form>
          </div>
          <div className='login-lower'>
            <p className='text-2xl'>Don't have an account? <a onClick={() => { navigate("/signup"); }}>Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;