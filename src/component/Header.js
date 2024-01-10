import { useState } from 'react';
import { HEADER_LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/customHook/useOnlinestatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlinestatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? '✅' : '❌'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
