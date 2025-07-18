// import { Globe } from 'lucide-react';
import Globe from "../assets/globe.svg";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 bg-[#F8F9FA]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div>
          <img src={Globe} alt="globe" className="h-24 w-24" />
        </div>
        <div>
          <a href="#asia" className="hover:text-teal-600">
            Asia
          </a>
        </div>
        <div>
          <a href="#europe" className="hover:text-teal-600">
            Europe
          </a>
        </div>
        <div>
          <a href="#contact" className="hover:text-teal-600">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
