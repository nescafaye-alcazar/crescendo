import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { AiOutlineEye } from 'react-icons/ai';
import { logo } from "../assets";
import "./Signup.css";

function Signup(props) {
  document.title = "Crescendo | Signup";
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [cpasswordShown, setCpasswordShown] = useState(false);

  const toggleCpasswordVisiblity = () => {
    setCpasswordShown(cpasswordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
    <div className="signup">

      <div className="signup-content my-5">
        <div className="signup-header py-5">
          <p className="signup-create font-bold text-5xl text-black text-left">Create your account</p>
          <p className="signup-up font-bold text-3xl text-white text-left">Sign up to stream music!</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-inputs text-xl">
            <input type="text" id="username" name="username" required />
            <span>Username</span>
          </div>

          <div className="signup-inputs text-xl">
            <input type="email" id="email" name="email" required />
            <span>Email</span>
          </div>

          <div className="signup-inputs text-xl">
            <input type={passwordShown ? "text" : "password"} id="password" name="password" required />
            <span>Password</span>
            <i className="eye mr-5" onClick={togglePasswordVisiblity}><AiOutlineEye /></i>
          </div>

          <div className="signup-inputs text-xl">
            <input type={cpasswordShown ? "text" : "password"} id="cpassword" name="cpassword"
              required />
            <span>Confirm Password</span>
            <i className="eye mr-5" onClick={toggleCpasswordVisiblity}><AiOutlineEye /></i>
          </div>

          <div className="signup-inputs-2 text-xl">

            <input type="date" id="birthdate" name="birthdate" required />
            <span className="bday-1">Birthdate </span>

            <input type="number" id="age" name="age" required />
            <span className="age-1">Age</span>

          </div>

          <p className="signup-agreement">By clicking the sign up you agree to Crescendo's Terms and Conditions of Use and Privacy Policy</p>
          <button onClick={() => { navigate("/")}} type="submit" className="signup-button">Sign up</button>
        </form>
        <p className="q text-2xl my-4">Already have an account? <a onClick={() => { navigate("/"); }}>Log In</a></p>
      </div >
    </div>
    </>
  );
}

export default Signup;