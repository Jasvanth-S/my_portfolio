import React from 'react';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import siteData from '../config/siteData';

const Research = () => {
    return (
        <section id="research" className="py-20 bg-gray-50 dark:bg-[#1E1E1E]/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Research & <span className="text-primary">Publications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {siteData.research.map((res, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-3 group-hover:text-primary transition-colors">
                                    <FaBookOpen className="text-primary mt-1 flex-shrink-0" size={20} />
                                    {res.title}
                                </h3>
                                <p className="text-sm font-semibold text-primary mb-3 pl-8">
                                    {res.conference}
                                </p>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 pl-8">
                                {res.summary}
                            </p>

                            {res.link && res.link !== '#' && (
                                <a
                                    href={res.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors ml-8"
                                >
                                    Read Paper <FaExternalLinkAlt size={12} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
