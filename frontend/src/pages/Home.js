import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Categories</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        
        <Link to="/subcategory/fish" style={linkStyle}>
          Fish
        </Link>

        <Link to="/subcategory/dog-accessories" style={linkStyle}>
          Dog Accessories
        </Link>

        <Link to="/subcategory/cat-accessories" style={linkStyle}>
          Cat Accessories
        </Link>

        <Link to="/subcategory/fish-accessories" style={linkStyle}>
          Fish Accessories
        </Link>

        <Link to="/subcategory/birds" style={linkStyle}>
          Birds
        </Link>

        <Link to="/subcategory/birds-accessories" style={linkStyle}>
          Birds Accessories
        </Link>
      </div>
    </div>
  );
};

const linkStyle = {
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: '#e0f7fa',
  textAlign: 'center',
  textDecoration: 'none',
  color: '#00796b',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Home;
