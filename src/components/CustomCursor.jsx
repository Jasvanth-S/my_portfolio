import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);
    const cursorTextRef = useRef(null);

    const mouse = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const scale = useRef({ dot: 1, ring: 1 });
    const targetScale = useRef({ dot: 1, ring: 1 });

    useEffect(() => {
        // Check if mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) return;

        const cursorDot = cursorDotRef.current;
        const cursorRing = cursorRingRef.current;
        const cursorText = cursorTextRef.current;

        // Hide default cursor
        document.body.style.cursor = 'none';

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        // Mouse down handler
        const handleMouseDown = () => {
            targetScale.current.dot = 0.8;
            targetScale.current.ring = 0.9;
            cursorRing.style.borderWidth = '3px';
        };

        // Mouse up handler
        const handleMouseUp = () => {
            targetScale.current.dot = 1;
            targetScale.current.ring = 1;
            cursorRing.style.borderWidth = '2px';
        };

        // Hover handlers for interactive elements
        const handleMouseEnter = (e) => {
            const cursorType = e.target.getAttribute('data-cursor');

            targetScale.current.dot = 0.5;
            targetScale.current.ring = 1.5;
            cursorDot.style.backgroundColor = 'transparent';

            if (cursorType) {
                cursorText.textContent = cursorType.toUpperCase();
                cursorText.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            targetScale.current.dot = 1;
            targetScale.current.ring = 1;
            cursorDot.style.backgroundColor = 'var(--cursor-color)';
            cursorText.style.opacity = '0';
            cursorText.textContent = '';
        };

        // Add hover listeners to interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-hover'
            );

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            return () => {
                interactiveElements.forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        // Lerp function for smooth animation
        const lerp = (start, end, factor) => {
            return start + (end - start) * factor;
        };

        // Animation loop
        let animationId;
        const animate = () => {
            // Smooth cursor dot movement (faster)
            cursorPos.current.x = lerp(cursorPos.current.x, mouse.current.x, 0.25);
            cursorPos.current.y = lerp(cursorPos.current.y, mouse.current.y, 0.25);

            // Smooth ring movement (slower, creates lag effect)
            ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.1);
            ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.1);

            // Smooth scale transitions
            scale.current.dot = lerp(scale.current.dot, targetScale.current.dot, 0.15);
            scale.current.ring = lerp(scale.current.ring, targetScale.current.ring, 0.15);

            // Apply transformations
            cursorDot.style.transform = `translate(-50%, -50%) translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) scale(${scale.current.dot})`;
            cursorRing.style.transform = `translate(-50%, -50%) translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${scale.current.ring})`;

            animationId = requestAnimationFrame(animate);
        };

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const cleanupHover = addHoverListeners();
        animate();

        // Cleanup
        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(animationId);
            cleanupHover();
        };
    }, []);

    return (
        <>
            {/* Cursor Dot */}
            <div
                ref={cursorDotRef}
                className="custom-cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--cursor-color, #00F0FF)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    mixBlendMode: 'difference',
                    transition: 'background-color 0.2s ease',
                }}
            />

            {/* Cursor Ring */}
            <div
                ref={cursorRingRef}
                className="custom-cursor-ring"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '2px solid var(--cursor-ring-color, #00F0FF)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99998,
                    mixBlendMode: 'difference',
                    transition: 'border-width 0.1s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Cursor Text */}
                <span
                    ref={cursorTextRef}
                    style={{
                        fontSize: '10px',
                        fontWeight: '600',
                        color: 'var(--cursor-ring-color, #00F0FF)',
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap',
                    }}
                />
            </div>
        </>
    );
};

export default CustomCursor;
