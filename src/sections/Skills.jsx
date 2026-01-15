import React from 'react';
import siteData from '../config/siteData';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {siteData.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-4 bg-gray-100 dark:bg-[#1E1E1E] rounded-xl hover:bg-gray-200 dark:hover:bg-[#1E1E1E]/80 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 transform hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <img
                                    src={skill.iconUrl}
                                    alt={skill.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        // Fallback if image fails to load
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors text-center">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
