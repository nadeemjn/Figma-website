import React from 'react';

const Header = () => {
  // ... existing code ...

    return (
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  