import { useEffect, useRef } from 'react';

export default function ParticleRing() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = 0;
        let mouseY = 0;
        let isVisible = false;

        // Configuration
        const particleCount = 100; // Reduced from 400 for performance
        const ringRadius = 250;
        const ringThickness = 60;
        const color = '14, 165, 233'; // Primary color (sky-500 equivalent)

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        class Particle {
            x: number;
            y: number;
            z: number;
            angle: number;
            radius: number;
            speed: number;
            opacity: number;

            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                this.radius = ringRadius + (Math.random() - 0.5) * ringThickness;
                // Random z-depth for 3D effect simulation
                this.z = (Math.random() - 0.5) * 100;
                this.speed = 0.002 + Math.random() * 0.003;
                this.opacity = 0.3 + Math.random() * 0.7;

                // Initial position
                this.x = 0;
                this.y = 0;
                this.updatePosition();
            }

            updatePosition() {
                const centerX = canvas!.width / 2;
                const centerY = canvas!.height / 2;

                // Interaction with mouse
                // Calculate vector from center to mouse
                const mouseDX = (mouseX - centerX) / centerX;
                const mouseDY = (mouseY - centerY) / centerY;

                // Tilt based on mouse
                // Keep tilt subtle to avoid heavy distortion calculation
                const tiltX = mouseDY * 0.5;
                const tiltY = mouseDX * 0.5;

                // Rotate angle
                this.angle += this.speed;

                // 3D projection approximation
                const px = Math.cos(this.angle) * this.radius;
                const py = Math.sin(this.angle) * this.radius;

                // Apply tilt (Simplified matrix application)
                const projectedX = px * Math.cos(tiltY) - this.z * Math.sin(tiltY);
                const projectedY = py * Math.cos(tiltX) + (px * Math.sin(tiltY)) * Math.sin(tiltX);

                this.x = centerX + projectedX;
                this.y = centerY + projectedY;
            }

            draw() {
                if (!ctx) return;
                const size = (this.z + 50) / 100 + 1.5; // Scale by "depth"

                // Optimize drawing: only draw if size is positive
                if (size <= 0) return;

                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!isVisible) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.updatePosition();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        // Performance Optimization: Intersection Observer
        // Only animate when the component is in the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    animate();
                } else {
                    isVisible = false;
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(container);

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove); // Listen on window to allow interaction through overlay

        resize();
        init();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full opacity-60" />
        </div>
    );
}
