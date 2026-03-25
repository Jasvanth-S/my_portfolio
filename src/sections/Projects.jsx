import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import siteData from '../config/siteData';

const SignatureProjects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-[#1E1E1E]/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Signature <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteData.signatureProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800 dark:bg-[#1E1E1E] rounded-full text-white hover:text-primary hover:bg-white dark:hover:bg-white transition-colors"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800 dark:bg-[#1E1E1E] rounded-full text-white hover:text-primary hover:bg-white dark:hover:bg-white transition-colors"
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                    {project.description}
                                </p>
                                
                                <div className="mb-4">
                                    <span className="font-semibold text-xs text-gray-800 dark:text-gray-200">Problem Solved: </span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{project.problemSolved}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="font-semibold text-xs text-gray-800 dark:text-gray-200">Outcome: </span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{project.outcome}</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-[#050505] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignatureProjects;
