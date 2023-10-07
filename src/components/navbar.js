import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-red-400 p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="brand text-2xl font-bold">Burned Unity</Link>
        <div className="categories space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/category/some-id" className="text-white hover:text-gray-300">Productos</Link>
          <Link to="/ubicacion" className="text-white hover:text-gray-300">Ubicacion</Link>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
