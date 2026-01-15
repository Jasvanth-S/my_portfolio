import React, { useState } from 'react';
import siteData from '../config/siteData';
import { FaDownload } from 'react-icons/fa';

const About = () => {
    const [showCVMenu, setShowCVMenu] = useState(false);

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-[#1E1E1E]/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Profile Image - Always Circular */}
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20 transform hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <img
                            src={`${process.env.PUBLIC_URL}${siteData.profilePhoto}`}
                            alt={siteData.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                console.log("Image failed to load from:", e.target.src);
                                e.target.src = "https://via.placeholder.com/400";
                            }}
                        />
                    </div>

                    {/* About Text */}
                    <div className="max-w-xl text-center md:text-left">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {siteData.bio}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            I am dedicated to writing clean, efficient code and building user-centric solutions.
                            Always eager to learn new technologies and improve my skills effectively.
                        </p>

                        {/* CV Download Button with Dropdown */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowCVMenu(!showCVMenu)}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white dark:text-[#050505] rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                            >
                                <FaDownload />
                                Get CV
                            </button>

                            {/* Dropdown Menu */}
                            {showCVMenu && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-10">
                                    {siteData.cvFiles.map((cv, index) => (
                                        <a
                                            key={index}
                                            href={cv.file}
                                            download
                                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                            onClick={() => setShowCVMenu(false)}
                                        >
                                            {cv.role}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <p className="mt-6">
                            <a href="#contact" className="text-primary font-semibold hover:underline">
                                Let's build something together!
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
