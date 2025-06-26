
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  life: number;
  maxLife: number;
  type: 'leaf' | 'grass' | 'flower';
  color: string;
}

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const lastAutoSpawnRef = useRef(0);

  // Softer, more pastel colors that work well with light backgrounds
  const colors = {
    leaf: ['#86efac', '#6ee7b7', '#5eead4', '#7dd3fc', '#a5b4fc'],
    grass: ['#bef264', '#a3e635', '#84cc16', '#65a30d'],
    flower: ['#fed7aa', '#fde68a', '#fef3c7', '#f9a8d4', '#ddd6fe']
  };

  const createParticle = (x: number, y: number): Particle => {
    const types: ('leaf' | 'grass' | 'flower')[] = ['leaf', 'grass', 'flower'];
    const type = types[Math.floor(Math.random() * types.length)];
    const colorArray = colors[type];
    
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6 - 1,
      size: Math.random() * 6 + 3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.15,
      opacity: 0.6 + Math.random() * 0.4,
      life: 0,
      maxLife: 80 + Math.random() * 80,
      type,
      color: colorArray[Math.floor(Math.random() * colorArray.length)]
    };
  };

  const drawLeaf = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = particle.opacity;
    ctx.fillStyle = particle.color;
    
    ctx.beginPath();
    ctx.ellipse(0, 0, particle.size * 0.6, particle.size, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Add leaf vein
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -particle.size);
    ctx.lineTo(0, particle.size);
    ctx.stroke();
    
    ctx.restore();
  };

  const drawGrass = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = particle.opacity;
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(0, -particle.size);
    ctx.lineTo(0, particle.size);
    ctx.stroke();
    
    ctx.restore();
  };

  const drawFlower = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = particle.opacity;
    ctx.fillStyle = particle.color;
    
    // Draw simple flower petals
    for (let i = 0; i < 5; i++) {
      ctx.save();
      ctx.rotate((i * Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(0, -particle.size * 0.3, particle.size * 0.3, particle.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    
    // Center
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(0, 0, particle.size * 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  };

  const updateParticles = () => {
    setParticles(prevParticles => {
      return prevParticles
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + 0.08, // slightly reduced gravity
          rotation: particle.rotation + particle.rotationSpeed,
          life: particle.life + 1,
          opacity: Math.max(0, (1 - (particle.life / particle.maxLife)) * 0.8)
        }))
        .filter(particle => 
          particle.life < particle.maxLife && 
          particle.x > -50 && 
          particle.x < window.innerWidth + 50 &&
          particle.y < window.innerHeight + 50
        );
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    
    mouseRef.current = { x, y };
    
    // Create particles on mouse movement
    if (Math.random() < 0.25) {
      const newParticles = Array.from({ length: Math.floor(Math.random() * 2) + 1 }, () =>
        createParticle(x + (Math.random() - 0.5) * 30, y + (Math.random() - 0.5) * 30)
      );
      
      setParticles(prev => {
        const updated = [...prev, ...newParticles];
        return updated.length > 80 ? updated.slice(-80) : updated;
      });
    }
  };

  const spawnAutoParticles = () => {
    const now = Date.now();
    if (now - lastAutoSpawnRef.current > 2000) { // Every 2 seconds
      const x = Math.random() * window.innerWidth;
      const y = -20; // Start from top
      const newParticle = createParticle(x, y);
      
      setParticles(prev => {
        const updated = [...prev, newParticle];
        return updated.length > 80 ? updated.slice(-80) : updated;
      });
      
      lastAutoSpawnRef.current = now;
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        switch (particle.type) {
          case 'leaf':
            drawLeaf(ctx, particle);
            break;
          case 'grass':
            drawGrass(ctx, particle);
            break;
          case 'flower':
            drawFlower(ctx, particle);
            break;
        }
      });
    }
    
    updateParticles();
    spawnAutoParticles();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('mousemove', handleMouseMove);
      
      animate();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'transparent'
      }}
    />
  );
};

export default InteractiveBackground;
