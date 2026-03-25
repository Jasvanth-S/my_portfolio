import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import siteData from '../config/siteData';

const ProfessionalEngagements = () => {
    return (
        <section id="engagements" className="py-20 bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Professional <span className="text-primary">Work</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {siteData.professionalEngagements.map((eng, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={eng.image}
                                    alt={eng.client}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {eng.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    <FaHandshake className="text-primary" size={20} />
                                    {eng.client}
                                </h3>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">{eng.summary}</h4>

                                <div className="space-y-3 mb-4">
                                    <div>
                                        <p className="font-semibold text-xs text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-1">Contribution</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{eng.contribution}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xs text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-1">Impact Delivered</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{eng.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalEngagements;
