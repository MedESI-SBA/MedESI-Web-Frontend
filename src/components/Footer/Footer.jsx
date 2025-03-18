import React from "react";
import Twitter from "../../assets/Button.svg";
import LinkedIn from "../../assets/Button-1.svg";
import Instagram from "../../assets/Button-2.svg";
import Facebook from "../../assets/Button-3.svg";
import Dribbble from "../../assets/Button-4.svg";
import GitHub from "../../assets/Button-5.svg";

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
      <div className="mb-6 md:mb-0 text-center md:text-left">
        © 2025 <span className="font-semibold">MedEsi</span>
      </div>

      <div className="flex space-x-6 mb-6 md:mb-0">
        <img src={Twitter} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-80" />
        <img src={LinkedIn} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80" />
        <img src={Instagram} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80" />
        <img src={Facebook} alt="Facebook" className="w-7 h-7 cursor-pointer hover:opacity-80" />
        <img src={Dribbble} alt="Dribbble" className="w-7 h-7 cursor-pointer hover:opacity-80" />
        <img src={GitHub} alt="GitHub" className="w-7 h-7 cursor-pointer hover:opacity-80" />
      </div>

      <div className="flex items-center space-x-8">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Cookies</a>
       
      </div>
    </footer>
  );
};

export default Footer;
