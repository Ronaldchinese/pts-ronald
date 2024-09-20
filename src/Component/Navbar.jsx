import Logo from '../../public/logo-iphone.png';
import Search from '../../public/Search.png';

const Navbar = () => {
  return (
    <nav className="bg-stone-600 bg-opacity-30 text-white fixed w-full z-50"> 
      <div className="container mx-auto flex items-center justify-center space-x-20 py-3">
        <div className="flex items-center">
          <img src={Logo} alt="iPhone logo" className="h-8 w-auto" />
        </div>

        <div className="flex space-x-20">
          <a href="#Mac" className="hover:text-gray-300 hover:underline">Mac</a>
          <a href="#iPad" className="hover:text-gray-300 hover:underline">iPad</a>
          <a href="#iPhone" className="hover:text-gray-300 hover:underline">iPhone</a>
          <a href="#Watch" className="hover:text-gray-300 hover:underline">Watch</a>
          <a href="#AirPods" className="hover:text-gray-300 hover:underline">AirPods</a>
          <a href="#Support" className="hover:text-gray-300 hover:underline">Dukungan</a>
          <a href="#WhereToBuy" className="hover:text-gray-300 hover:underline">Tempat Membeli</a>
        </div>

        <div className="flex items-center">
          <img src={Search} alt="Search button" className="h-5 w-auto cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
