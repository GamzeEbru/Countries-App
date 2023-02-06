import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <header style={{ position: 'sticky', top: '0' }}>
        <nav>
          <Link to="/">
            <h1 style={{
              color: 'white', 
            }}>Countries</h1>
          </Link>
      
        </nav>
      </header>
    </>
  );
};
