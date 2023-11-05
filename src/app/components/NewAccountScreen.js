import React from "react";
import './NewAccountScreen.css'


const NewAccountScreen = () => {
    
    return(
    <div className="account-creation-form">
  <h2>Create your account</h2>
  <p>Create an account to view and manage your projects.</p>
  
  <form>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
    </div>

    <div className="form-group">
      <label htmlFor="confirm-password">Confirm password</label>
      <input type="password" id="confirm-password" name="confirmPassword" required />
    </div>

    <div className="checkbox-group">
      <input type="checkbox" id="enroll" name="enroll" />
      <label htmlFor="enroll">Enroll in Expo Developer Services</label>
    </div>

    <button type="submit">Create your account</button>
  </form>

  <p className="terms">
    By creating an account you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
  </p>
</div>

    )
}

export default NewAccountScreen;