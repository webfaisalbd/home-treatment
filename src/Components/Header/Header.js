import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import  "./Header.css";

const Header = () => {
  const {handleLogout,user} =useFirebase();
    return (
        <div>
      <div className="menu-container">
        <Link to="/home" className="header-items">
          Home
        </Link>
        <Link to="/checkout" className="header-items">
          Payments
        </Link>
        <Link to="/shipping" className="header-items">
          shipping
        </Link>
        
          <Link to="/register" className="header-items">
          Register
        </Link>

     {
       user.email? 
       <Link to="/logout" onClick={handleLogout} className="header-items">LogOut</Link>
       :
       <Link to="/login" className="header-items"> Login </Link>
     }


        
      </div>
    </div>
    );
};

export default Header;