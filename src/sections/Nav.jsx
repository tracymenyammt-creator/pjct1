import React, { useState } from "react";
import { motion } from "framer-motion";



function Navigation({ isMobile }) {
  return (
    <ul className={isMobile ? "flex flex-col gap-4" : "flex gap-6"}>
      <li>
        <a className="text-white hover:text-neutral-300" href="#home">Home</a>
      </li>
      <li>
        <a className="text-white hover:text-neutral-300" href="#about">About</a>
      </li>
      <li>
        <a className="text-white hover:text-neutral-300" href="#work">Work</a>
      </li>
      <li>
        <a className="text-white hover:text-neutral-300" href="#contact">Contact</a>
      </li>
    </ul>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-white hover:text-neutral-300"
          >
            Menyam
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white hover:text-neutral-300 focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg": "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation isMobile={false} />
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation isMobile={true} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
