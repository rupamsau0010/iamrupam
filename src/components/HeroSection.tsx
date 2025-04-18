import React, { useEffect, useRef } from 'react';
import { ArrowRight, Database, Server, Cloud, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createDataVisualization = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      
      if (!canvas || !container) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const setCanvasSize = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      };
      
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);
      
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speed: number;
        color: string;
        direction: number;
      }> = [];
      
      const colors = ['#0ea5e9', '#0284c7', '#0369a1', '#14b8a6'];
      
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          direction: Math.random() * Math.PI * 2
        });
      }
      
      const connectParticles = (p1: typeof particles[0], p2: typeof particles[0]) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(14, 165, 233, ${(100 - distance) / 1000})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      };
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          p.x += Math.cos(p.direction) * p.speed;
          p.y += Math.sin(p.direction) * p.speed;
          
          if (p.x < 0 || p.x > canvas.width) {
            p.direction = Math.PI - p.direction;
          }
          if (p.y < 0 || p.y > canvas.height) {
            p.direction = -p.direction;
          }
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          
          particles.forEach(p2 => {
            if (p !== p2) {
              connectParticles(p, p2);
            }
          });
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', setCanvasSize);
      };
    };
    
    createDataVisualization();
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="hero-badge">
              Azure Data Engineer
            </span>
          </div>
          
          <h1 className="heading-xl mt-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Rupam Sau: Transforming <span className="text-azure-400">Data</span> into Valuable Insights
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            Specialized in building scalable data pipelines, ETL processes, and analytics solutions in the Azure Cloud ecosystem.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            <Button asChild size="lg" className="gap-2 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/90]">
              <a href="#projects">
                View Projects <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="gap-2 bg-[#111827] text-white hover:bg-[#111827]/90 dark:bg-gray-700 dark:hover:bg-gray-600">
              <a href="/resume.pdf" download>
                Download Resume <Download size={16} />
              </a>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-6 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
              <Database className="h-8 w-8 text-azure-400 mb-2" />
              <h3 className="font-medium">Data Engineering</h3>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
              <Cloud className="h-8 w-8 text-azure-400 mb-2" />
              <h3 className="font-medium">Azure Cloud</h3>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center">
              <Server className="h-8 w-8 text-azure-400 mb-2" />
              <h3 className="font-medium">Big Data</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
