import React, { useState } from 'react';
import './Notes.css';
import { Component } from 'react';
import LoginScreen from '../components/LoginScreen';

const Account = () => {

      return (
        <body>
            {/* !!Needs sodi's state edits!! */}
        <div>
            <h1>Account</h1>
        </div>
        <div>
            <h2>Name</h2>
            <p>{this.state.user.name}</p>
        </div>

        <div>
            <h3>Email</h3>
            <p>{this.state.user.email}</p>
        </div>

        <div>
            <h3>School</h3>
            <p>{this.state.user.school}</p>
        </div>

        </body>

      )
};

export default Account;