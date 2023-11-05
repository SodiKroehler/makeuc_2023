import React from "react";
import Link from 'next/link';


    const ChooseLoginOrSignUp = () => {


        return (
            <div className="welcome-buttons">
                <Link href='/LoginScreen'>
                <button className="login-button">
                    Log In / Go To My Account
                </button>
                </Link>
                <Link href='/NewAccountScreen'>
                <button className="signup-button">
                    Sign Up
                </button>
                </Link>
            </div>
        );
    }

    export default ChooseLoginOrSignUp;
