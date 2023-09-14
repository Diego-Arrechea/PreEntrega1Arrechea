import CartWidget from './cartwidget.js';

const Navbar = () => {
  return (
    <nav className="bg-red-400 p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="brand text-2xl font-bold">Burned Unity</div>
        <div className="categories space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Productos</a>
          <a href="#" className="text-white hover:text-gray-300" >Ubicacion</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;