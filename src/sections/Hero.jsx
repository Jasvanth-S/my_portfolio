import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import siteData from '../config/siteData';

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % siteData.roles.length);
                setFade(true);
            }, 500); // Fade out duration
        }, 6000); // Change role every 6 seconds (enough time for typing)

        return () => clearInterval(interval);
    }, []);

    const currentRole = siteData.roles[currentRoleIndex];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050505] text-gray-900 dark:text-[#E0E0E0] px-6 pt-20">
            <div className="text-center max-w-4xl mx-auto">
                {/* Intro */}
                <p className="text-primary text-xl md:text-2xl font-medium mb-4">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white hover:text-primary transition-colors duration-300">
                    {siteData.name}
                </h1>

                {/* Role with typing effect and Description with fade transition */}
                <div className="min-h-[240px] md:min-h-[200px] mb-8 flex flex-col items-center justify-center">
                    <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                            <TypeAnimation
                                key={currentRoleIndex} // Force re-render on role change
                                sequence={[currentRole.title]}
                                wrapper="span"
                                speed={50}
                                cursor={false}
                            />
                        </h2>
                        <p className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            {currentRole.description}
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-[#050505] font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                        View Work
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-8 py-3 rounded-full bg-gray-200 dark:bg-[#1E1E1E] text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
