import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000 });
    const trailParticlesRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const staticParticles = [];

        // Different color schemes for dark and light modes
        const darkColors = ['#00F0FF', '#FF6B6B', '#FFD93D', '#6BCF7F', '#A78BFA', '#F472B6'];
        const lightColors = ['#1E40AF', '#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777'];

        // Static Particle class (background particles that repel)
        class StaticParticle {
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

        // Trail Particle class (jellyfish effect - follows cursor)
        class TrailParticle {
            constructor(x, y, isDark) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.life = 1;
                this.size = Math.random() * 4 + 2;
                const colors = isDark ? darkColors : lightColors;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.element = this.createElement();
            }

            createElement() {
                const el = document.createElement('div');
                el.style.position = 'fixed';
                el.style.width = this.size + 'px';
                el.style.height = this.size + 'px';
                el.style.borderRadius = '50%';
                el.style.backgroundColor = this.color;
                el.style.pointerEvents = 'none';
                el.style.zIndex = '9999';
                el.style.left = this.x + 'px';
                el.style.top = this.y + 'px';
                el.style.boxShadow = `0 0 ${this.size * 2}px ${this.color}`;
                container.appendChild(el);
                return el;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.98;
                this.vy *= 0.98;
                this.life -= 0.015;

                this.element.style.left = this.x + 'px';
                this.element.style.top = this.y + 'px';
                this.element.style.opacity = this.life;
                this.element.style.transform = `scale(${this.life})`;
            }

            remove() {
                if (this.element && this.element.parentNode) {
                    this.element.parentNode.removeChild(this.element);
                }
            }
        }

        // Create static background particles
        const createStaticParticles = () => {
            const particleCount = 150;
            const isDark = document.documentElement.classList.contains('dark');

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const colorIndex = Math.floor(Math.random() * darkColors.length);
                staticParticles.push(new StaticParticle(x, y, colorIndex, isDark));
            }
        };

        // Mouse move handler
        const handleMouseMove = (e) => {
            const currentX = e.clientX;
            const currentY = e.clientY;

            // Calculate mouse velocity for trail intensity
            const dx = currentX - mouseRef.current.prevX;
            const dy = currentY - mouseRef.current.prevY;
            const velocity = Math.sqrt(dx * dx + dy * dy);

            mouseRef.current.prevX = mouseRef.current.x;
            mouseRef.current.prevY = mouseRef.current.y;
            mouseRef.current.x = currentX;
            mouseRef.current.y = currentY;

            // Create trail particles (jellyfish effect)
            if (velocity > 1) {
                const isDark = document.documentElement.classList.contains('dark');
                const particlesToCreate = Math.min(Math.floor(velocity / 5), 3);

                for (let i = 0; i < particlesToCreate; i++) {
                    const offsetX = (Math.random() - 0.5) * 10;
                    const offsetY = (Math.random() - 0.5) * 10;
                    trailParticlesRef.current.push(
                        new TrailParticle(currentX + offsetX, currentY + offsetY, isDark)
                    );
                }
            }
        };

        // Animation loop
        let animationId;
        const animate = () => {
            // Update static particles (repel effect)
            staticParticles.forEach(particle => {
                particle.update(mouseRef.current.x, mouseRef.current.y);
            });

            // Update trail particles (jellyfish effect)
            trailParticlesRef.current = trailParticlesRef.current.filter(particle => {
                particle.update();
                if (particle.life <= 0) {
                    particle.remove();
                    return false;
                }
                return true;
            });

            animationId = requestAnimationFrame(animate);
        };

        // Update particle colors when theme changes
        const updateParticleColors = () => {
            const isDark = document.documentElement.classList.contains('dark');
            staticParticles.forEach(particle => particle.updateColor(isDark));
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
        createStaticParticles();
        animate();

        // Cleanup
        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            staticParticles.forEach(p => p.remove());
            trailParticlesRef.current.forEach(p => p.remove());
        };
    }, []);

    return <div ref={containerRef} className="pointer-events-none fixed inset-0" />;
};

export default CursorTrail;
