import React from 'react';
import { FaChalkboardTeacher, FaExternalLinkAlt } from 'react-icons/fa';
import siteData from '../config/siteData';

const Presentations = () => {
    return (
        <section id="presentations" className="py-20 bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Technical <span className="text-primary">Presentations</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {siteData.presentations.map((pres, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pres.image}
                                    alt={pres.topic}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <FaChalkboardTeacher /> {pres.event}
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                    {pres.topic}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                                    {pres.focus}
                                </p>
                                
                                {pres.link && pres.link !== '#' && (
                                    <a
                                        href={pres.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                    >
                                        View Slides / Media <FaExternalLinkAlt size={12} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Presentations;
