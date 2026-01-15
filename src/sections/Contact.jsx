import React from 'react';
import siteData from '../config/siteData';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <div className="bg-gray-100 dark:bg-[#1E1E1E] rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <a
                        href={`mailto:${siteData.email}`}
                        className="inline-block px-8 py-4 rounded-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-[#050505] font-bold text-lg transition-all duration-300 transform hover:scale-105 mb-12"
                    >
                        Say Hello
                    </a>

                    <div className="flex flex-wrap justify-center gap-6">
                        {siteData.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-[#050505]/50"
                            >
                                <div className="text-2xl">
                                    {social.icon}
                                </div>
                                <span className="font-medium">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
