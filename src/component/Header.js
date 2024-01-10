import { useState } from 'react';
import { HEADER_LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/customHook/useOnlinestatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlinestatus();
  return (
    <div className="flex justify-between bg-green-50 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-pink-100">
      <div className="flex items-center">
        <img className="w-36" src={HEADER_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg font-medium">
            Online Status: {onlineStatus ? '✅' : '❌'}
          </li>
          <li className="px-4 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg font-medium">Cart</li>
          <button
            className="px-4 text-lg font-medium"
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
