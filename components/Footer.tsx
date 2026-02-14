import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t-8 border-yellow-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black mb-2 tracking-tighter">TEENCON</h2>
          <p className="text-gray-400">Empowering Youth Since 2021.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#FF4081] transition-colors"><Instagram size={20} /></a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#00E5FF] transition-colors"><Twitter size={20} /></a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-[#0056b3] transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-green-500 transition-colors"><Mail size={20} /></a>
        </div>

        <div className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} TEENCON. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;