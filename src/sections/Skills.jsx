import React from 'react';
import siteData from '../config/siteData';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-[#1E1E1E]/30 hover-trigger">
            <style>{`
                .group:hover .animate-bar-fill {
                    animation: fillBar 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }
                @keyframes fillBar {
                    0% { width: 0%; }
                    100% { width: var(--skill-level); }
                }
            `}</style>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Core <span className="text-primary">Skills</span>
                </h2>

                <div className="max-w-6xl mx-auto space-y-12">
                    {siteData.skillsCategorized.map((categoryGroup, index) => (
                        <div key={index} className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">
                                {categoryGroup.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {categoryGroup.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="group p-4 bg-white dark:bg-[#1E1E1E] rounded-xl hover:bg-gray-100 dark:hover:bg-[#1E1E1E]/80 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 transform hover:-translate-y-2 shadow-sm"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src={skill.iconUrl}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors text-center w-full truncate">
                                            {skill.name}
                                        </h3>
                                        {/* Hover-activated progress bar & numbering */}
                                        {skill.level && (
                                            <div
                                                className="w-full mt-1 flex flex-col gap-1 w-full"
                                                style={{ "--skill-level": `${skill.level}%` }}
                                            >
                                                {/* Hidden by default, fades in on hover */}
                                                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Proficiency</span>
                                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{skill.level}%</span>
                                                </div>
                                                
                                                <div className="w-full bg-gray-200 dark:bg-[#0A0A0A] rounded-full h-1.5 overflow-hidden border border-gray-300/50 dark:border-white/5 relative">
                                                    <div
                                                        className="bg-primary h-full rounded-full w-[var(--skill-level)] relative group-hover:brightness-110 animate-bar-fill"
                                                    >
                                                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
