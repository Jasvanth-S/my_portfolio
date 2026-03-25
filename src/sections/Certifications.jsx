import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import siteData from '../config/siteData';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Professional <span className="text-primary">Certifications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {siteData.certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col justify-between"
                        >
                            {/* Certificate Image Area */}
                            {cert.image && (
                                <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 relative overflow-hidden border-b border-gray-200 dark:border-gray-700">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            )}

                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg flex-shrink-0">
                                            <FaCertificate className="text-primary text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors leading-tight">
                                                {cert.name}
                                            </h3>
                                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                                {cert.organization}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {cert.year}
                                    </span>
                                    {cert.link && cert.link !== "#" && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm font-bold transition-colors"
                                        >
                                            View Credential <FaExternalLinkAlt size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
