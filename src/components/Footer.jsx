import React from 'react';
import { Link } from 'react-scroll';
import siteData from '../config/siteData';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-[#050505] py-8 border-t border-gray-300 dark:border-gray-900">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    {/* Simple upward navigation */}
                    <Link to="hero" smooth={true} duration={500} className="text-gray-500 dark:text-gray-500 hover:text-primary cursor-pointer transition-colors text-sm">
                        Back to Top
                    </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
                </p>
                <p className="text-gray-500 dark:text-gray-700 text-xs mt-2">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
