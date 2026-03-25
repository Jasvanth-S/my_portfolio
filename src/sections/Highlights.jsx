import React, { useState, useEffect } from 'react';
import { FaStar, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import siteData from '../config/siteData';

const HighlightCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (isHovered && item.images && item.images.length > 1) {
            interval = setInterval(() => {
                setImgIndex((prev) => (prev + 1) % item.images.length);
            }, 1200); // Cycle image every 1.2 seconds
        } else {
            // Optional: reset to first image slowly, or just leave it where it stopped.
            // setImgIndex(0); 
        }
        return () => clearInterval(interval);
    }, [isHovered, item.images]);

    const displayImage = item.images ? item.images[imgIndex] : item.image;

    return (
        <div
            className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setImgIndex(0); // Reset to first image on mouse leave natively
            }}
        >
            {/* Image Slideshow Area */}
            <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-[#121212]">
                {item.images && item.images.map((imgSrc, idx) => (
                    <img
                        key={idx}
                        src={imgSrc}
                        alt={item.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:scale-105 ${idx === imgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                ))}
                
                {/* Fallback for single image legacy data */}
                {!item.images && (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}

                {/* Slideshow Indicators (Dots) */}
                {item.images && item.images.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.images.map((_, i) => (
                            <div 
                                key={i} 
                                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === imgIndex ? 'w-5 bg-primary' : 'w-2 bg-white/70 backdrop-blur-sm'}`}
                            />
                        ))}
                    </div>
                )}
                
                {/* Gradient Overlay for better text legibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col z-20 bg-gray-50 dark:bg-[#1E1E1E]">
                <h3 className="text-xl flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    <FaStar className="text-primary flex-shrink-0" size={18} />
                    {item.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-primary" />
                        {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-primary" />
                        {item.date}
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const Highlights = () => {
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            // Scroll by slightly less than the full width to show context
            const scrollAmount = direction === 'left' ? -current.offsetWidth * 0.8 : current.offsetWidth * 0.8;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="highlights" className="py-20 bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6 relative">
                <style>{`
                    .hide-scroll::-webkit-scrollbar { display: none; }
                    .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Professional <span className="text-primary">Highlights</span>
                </h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    {siteData.highlights.length > 2 && (
                        <>
                            <button 
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white dark:bg-[#1E1E1E] text-primary p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform hidden sm:block"
                                aria-label="Scroll Left"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white dark:bg-[#1E1E1E] text-primary p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform hidden sm:block"
                                aria-label="Scroll Right"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                            </button>
                        </>
                    )}

                    {/* Scroll Container */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scroll"
                    >
                        {siteData.highlights.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex-none w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center sm:snap-start"
                            >
                                <HighlightCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
