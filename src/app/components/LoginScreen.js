import React from 'react';
import './LoginScreen.css'; // Import the CSS file

const LoginScreen = () => {
  //needs appropriate Global state code 
   if (UserID === '' || UserID === 'Undefined' || UserID === 'undefined') {
  return (
    <div className="login-container">
      <div className="user-icon"></div>
      <input type="text" className="input-field" placeholder="Username" />
      <input type="password" className="input-field" placeholder="********" />
      <div className="login-footer">
        <div className="checkbox">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
      <button className="login-button">LOGIN</button>
    </div>
  );
} else {
    return (
      <Link href='/Account'>
      <button>Go To Account Home</button>
      </Link>
    )
}
};

export default LoginScreen;