import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/logo-iphone.png';
import Search from '../../public/Search.png';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive); 
  };

  return (
    <nav className="bg-stone-600 bg-opacity-30 text-white fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-center space-x-20 py-3">
        <div className="flex items-center">
          <img src={Logo} alt="iPhone logo" className="h-8 w-auto" />
        </div>

        <div className="flex space-x-20">
          <Link to="/Mac" className="hover:text-gray-300 hover:underline">Mac</Link>
          <Link to="/iPad" className="hover:text-gray-300 hover:underline">iPad</Link>
          <Link to="/iPhone" className="hover:text-gray-300 hover:underline">iPhone</Link>
          <Link to="/Iwatch" className="hover:text-gray-300 hover:underline">Iwatch</Link>
          <Link to="/Ipods" className="hover:text-gray-300 hover:underline">Ipods</Link>
          <Link to="/Home" className="hover:text-gray-300 hover:underline">Home</Link>
        </div>

        <div className="flex items-center">
          {isSearchActive ? (
            <input
              type="text"
              placeholder="Cari..."
              className="bg-stone-600 bg-opacity-30 text-white p-2 rounded-full focus:outline-none"
              onBlur={() => setIsSearchActive(false)} 
            />
          ) : (
            <img
              src={Search}
              alt="Search button"
              className="h-5 w-auto cursor-pointer"
              onClick={handleSearchClick} 
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
