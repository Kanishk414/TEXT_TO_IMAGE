
import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="Logo" width={150} />
      
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright © {new Date().getFullYear()} | All rights reserved
      </p>
      
      <div className="flex gap-2.5">
        <a href="https://www.linkedin.com/in/kanishk-pardikar" target="_blank" rel="noopener noreferrer">
          <img src={assets.linkedin_icon} alt="Facebook" width={35} />
        </a>
        <a href="https://x.com/KanishkPardikar" target="_blank" rel="noopener noreferrer">
          <img src={assets.twitter_icon} alt="Twitter" width={35} />
        </a>
        <a href="https://www.instagram.com/kanishk.pardikar" target="_blank" rel="noopener noreferrer">
          <img src={assets.instagram_icon} alt="Instagram" width={35} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
