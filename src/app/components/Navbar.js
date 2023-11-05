
// import React from 'react';
import './Navbar.css'; // Make sure to create a Navbar.css file for your styles
import Image from 'next/image'
import Link from 'next/Link'

const Navbar = () => {
  // Define a function to handle button clicks if needed
  // const handleNavClick = (page) => {
  //   console.log(`Navigating to ${page}`);
  //   // Here you would typically do a navigation action, like using React Router to change the page
  // };

  return (
    // <nav className="navbar">
    <div className="navbar">
      <Link className="nav-item" href='/'>Home</Link>
      <Link className="nav-item" href='/About'>About</Link>
      <Link className="notes-button" href='/Notes'>Notes</Link>
      <div className="navbar-right">
        <Link className="nav-item new-note" href='/NewNote'>New Note +</Link>
        <Link className="profile-pic" href='/home'>
          <Image src="/profile.png" alt="Notes Anywhere" width={50} height={50} />
        </Link>
      </div>

</div>
      
  );
};

export default Navbar;


// {/* <button className="nav-item" onClick={() => handleNavClick('home')}>Home</button>
//       <button className="nav-item" onClick={() => handleNavClick('about')}>About</button>
//       <button className="notes-button" onClick={() => handleNavClick('notes')}>Notes</button>
//       <div className="navbar-right">
//         <button className="nav-item new-note" onClick={() => handleNavClick('NewNote')}>New Note +</button>
//         <button className="profile-pic" onClick={() => handleNavClick('profile')}>
//             <Image src="/profile.png" alt="Notes Anywhere" width={50} height={50} />
//         </button>
        
//       </div> */}
//     // </nav>