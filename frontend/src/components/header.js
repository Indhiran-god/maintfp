import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8f8f8' }}>
      <div className="text-blue-500">
        <h1 style={{ marginRight: 'auto' }}>Tirupur Fish & Pets</h1>
      </div> 

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: '5px 10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginRight: '20px'
        }}
      />

      {/* Cart Icon */}
      <FaShoppingCart size={24} style={{ marginRight: '20px', cursor: 'pointer' }} />

      {/* Login Button */}
      <Link to="/signin">
        <button style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Header;
