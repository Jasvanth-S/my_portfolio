import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const container = containerRef.current;
        const particles = [];

        // Different color schemes for dark and light modes
        const darkColors = ['#00F0FF', '#FF6B6B', '#FFD93D', '#6BCF7F', '#A78BFA', '#F472B6'];
        const lightColors = ['#1E40AF', '#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777'];

        // Particle class
        class Particle {
            constructor(x, y, colorIndex, isDark) {
                this.baseX = x;
                this.baseY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.size = Math.random() * 3 + 1;
                this.colorIndex = colorIndex;
                this.element = this.createElement(isDark);
            }

            createElement(isDark) {
                const el = document.createElement('div');
                el.style.position = 'fixed';
                el.style.width = this.size + 'px';
                el.style.height = this.size + 'px';
                el.style.borderRadius = '50%';
                el.style.pointerEvents = 'none';
                el.style.zIndex = '1';
                el.style.transition = 'background-color 0.3s ease';
                el.style.left = this.x + 'px';
                el.style.top = this.y + 'px';

                const colors = isDark ? darkColors : lightColors;
                el.style.backgroundColor = colors[this.colorIndex];
                el.style.opacity = isDark ? '0.6' : '0.7';

                container.appendChild(el);
                return el;
            }

            update(mouseX, mouseY) {
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 150;

                if (dist < repelRadius && dist > 0) {
                    const force = (repelRadius - dist) / repelRadius;
                    this.vx += (dx / dist) * force * 1.5;
                    this.vy += (dy / dist) * force * 1.5;
                }

                const returnForce = 0.08;
                this.vx += (this.baseX - this.x) * returnForce;
                this.vy += (this.baseY - this.y) * returnForce;

                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.92;
                this.vy *= 0.92;

                this.element.style.left = this.x + 'px';
                this.element.style.top = this.y + 'px';
            }

            updateColor(isDark) {
                const colors = isDark ? darkColors : lightColors;
                this.element.style.backgroundColor = colors[this.colorIndex];
                this.element.style.opacity = isDark ? '0.6' : '0.7';
            }

            remove() {
                if (this.element && this.element.parentNode) {
                    this.element.parentNode.removeChild(this.element);
                }
            }
        }

        // Create particles
        const createParticles = () => {
            // Calculate particle count based on viewport size
            const width = window.innerWidth;
            let particleCount;

            if (width >= 1024) {
                // Desktop: 220 particles
                particleCount = 220;
            } else if (width >= 768) {
                // Tablet: 120 particles
                particleCount = 120;
            } else {
                // Mobile: 60 particles
                particleCount = 60;
            }

            const isDark = document.documentElement.classList.contains('dark');

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const colorIndex = Math.floor(Math.random() * darkColors.length);

                particles.push(new Particle(x, y, colorIndex, isDark));
            }
        };

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        // Animation loop
        let animationId;
        const animate = () => {
            particles.forEach(particle => {
                particle.update(mouseRef.current.x, mouseRef.current.y);
            });
            animationId = requestAnimationFrame(animate);
        };

        // Update particle colors when theme changes
        const updateParticleColors = () => {
            const isDark = document.documentElement.classList.contains('dark');
            particles.forEach(particle => particle.updateColor(isDark));
        };

        // Observer for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    updateParticleColors();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        window.addEventListener('mousemove', handleMouseMove);
        createParticles();
        animate();

        // Cleanup
        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            particles.forEach(p => p.remove());
        };
    }, []);

    return <div ref={containerRef} className="pointer-events-none fixed inset-0" />;
};

export default CursorTrail;
