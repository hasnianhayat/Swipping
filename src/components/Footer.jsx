import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-12 py-8  bg-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Dribbble</h1>
        
        </div>

          <div className="flex flex-wrap gap-6 text-gray-800 font-bold">
            <a href="#">For designers</a>
            <a href="#">Hire talent</a>
            <a href="#">Inspiration</a>
            <a href="#">Advertising</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
          </div>

        <div className="flex items-center gap-5 text-xl text-gray-900">
          <FaTwitter className="hover:text-pink-600 cursor-pointer" />
          <FaFacebookF className="hover:text-pink-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
          <FaPinterestP className="hover:text-pink-600 cursor-pointer" />
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto mt-10  pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 text-xs gap-4">
        <div className="flex flex-wrap gap-4">
          <span>© 2025 Dribbble</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Designers
          </a>
          <a href="#" className="hover:underline">
            Freelancers
          </a>
          <a href="#" className="hover:underline">
            Tags
          </a>
          <a href="#" className="hover:underline">
            Places
          </a>
          <a href="#" className="hover:underline">
            Resources
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
