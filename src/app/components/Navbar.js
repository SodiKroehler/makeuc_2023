'use client'

import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/navigation';
import './Buttons.css';



const Navbar = () => {

    
    return (
        <div className='Navbar'> 

            <button className="LeftButtons" type="button" onClick={() => router.push('/Account')}>
                Account
            </button>

            <button className="LeftButtons" type="button" onClick={() => router.push('/Home')}>
                Home
            </button>

            <button className="LeftButtons" type="button" onClick={() => router.push('/About')}>
                About
            </button>

            <button className="LeftButtons" type="button" onClick={() => router.push('/Notes')}>
                Notes
            </button>
            <button className="RightButtons" type="button" onClick={() => router.push('/NewNote')}>
                    New Note +
                </button>
        </div>
            
               
    )
};

export default Navbar;