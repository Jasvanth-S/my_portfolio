import React, { useState, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Initialize the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfScrubber = ({ pdfUrl, defaultImage }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [loadError, setLoadError] = useState(false);
    const containerRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setLoadError(false);
    };

    const onDocumentLoadError = () => {
        // Fallback to image if the PDF cannot be loaded (e.g. CORS issues)
        setLoadError(true);
    };

    const handleMouseMove = useCallback((e) => {
        if (!numPages || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate the mouse X position relative to the container width
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));
        // Map the percentage to a page number (1 to numPages)
        const newPage = Math.ceil(percentage * numPages);
        setPageNumber(newPage || 1);
    }, [numPages]);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setPageNumber(1); // Reset to first page on exit
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Determine if the URL looks like a PDF
    const isPdf = typeof pdfUrl === 'string' && (pdfUrl.toLowerCase().endsWith('.pdf') || pdfUrl.includes('drive.google.com') === false);

    // If it's not a PDF or it failed to load, just render the image natively
    if (!isPdf || loadError || !pdfUrl) {
        return (
            <img
                src={defaultImage || pdfUrl}
                alt="Presentation Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        );
    }

    return (
        <div 
            ref={containerRef}
            className="w-full h-full relative cursor-ew-resize bg-white overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                        <img
                            src={defaultImage}
                            alt="Loading PDF..."
                            className="w-full h-full object-cover opacity-50 blur-sm"
                        />
                    }
                >
                    <Page 
                        pageNumber={pageNumber} 
                        width={containerRef.current ? containerRef.current.clientWidth : 600}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-md"
                    />
                </Document>
            </div>
            
            {/* Page Indicator Overlay */}
            {isHovered && numPages && numPages > 1 && (
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md z-30 font-semibold pointer-events-none">
                    Slide {pageNumber} / {numPages}
                </div>
            )}
        </div>
    );
};

export default PdfScrubber;
