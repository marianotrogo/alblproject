import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-neutral-700/80 shadow-sm">
            {/* Barra fija */}
            <div className="container px-4 mx-auto relative lg:text-sm py-2 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img className="h-12 w-auto mr-2" src={logo} alt="logo" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex ml-14 space-x-12">
                    <li><a href="#about" className="hover:text-green-500 transition">About</a></li>
                    <li><a href="#brands" className="hover:text-green-500 transition">Marcas</a></li>
                    <li><a href="#contact" className="hover:text-green-500 transition">Contacto</a></li>
                </ul>

                {/* Call to Action */}
                <div className="hidden lg:flex justify-center items-center">
                    <a
                        href="https://antoniolabrunaweb.com.ar/account/login"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white hover:shadow-md transition"
                    >
                        New Ecommerce
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleNavbar}
                    className="lg:hidden flex items-center justify-center p-1 text-neutral-700 hover:text-green-500 transition"
                    aria-label="Toggle Menu"
                    aria-expanded={navOpen}
                >
                    {navOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-gray-100 border-t border-neutral-700/80 py-4 px-4 flex flex-col items-center space-y-6 lg:hidden"
                    role="dialog"
                    aria-label="Mobile Navigation Menu"
                >
                    <ul className="space-y-4 w-full text-center">
                        <li>
                            <a
                                href="#about"
                                className="block w-full text-neutral-700 hover:text-green-500 transition"
                                onClick={toggleNavbar}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#brands"
                                className="block w-full text-neutral-700 hover:text-green-500 transition"
                                onClick={toggleNavbar}
                            >
                                Marcas
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block w-full text-neutral-700 hover:text-green-500 transition"
                                onClick={toggleNavbar}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <a
                        href="https://antoniolabrunaweb.com.ar/account/login"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-4 text-center rounded-md text-white hover:shadow-md transition"
                        onClick={toggleNavbar}
                    >
                        New Ecommerce
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;