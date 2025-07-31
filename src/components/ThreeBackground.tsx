import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    mouseX: number;
    mouseY: number;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Particle creation with yellow theme colors
    const particleCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Yellow and gold color palette
    const yellowPalette = [
      new THREE.Color(0x77BEF0), // Light blue
      new THREE.Color(0xFFCB61), // Yellow
      new THREE.Color(0xFF894F), // Orange
      new THREE.Color(0xEA5B6F), // Pink/Red
      new THREE.Color(0x5DADE2), // Lighter blue
      new THREE.Color(0xF7DC6F), // Lighter yellow
      new THREE.Color(0xF1948A)  // Lighter pink
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const color = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      mouseX: 0,
      mouseY: 0
    };

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      if (sceneRef.current) {
        sceneRef.current.mouseX = (event.clientX - window.innerWidth / 2) / 1000;
        sceneRef.current.mouseY = (event.clientY - window.innerHeight / 2) / 1000;
      }
    };

    // Window resize handler
    const handleResize = () => {
      if (sceneRef.current) {
        sceneRef.current.camera.aspect = window.innerWidth / window.innerHeight;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      if (sceneRef.current) {
        const time = Date.now() * 0.0005;
        sceneRef.current.particles.rotation.x = time * 0.25 + sceneRef.current.mouseY * 0.2;
        sceneRef.current.particles.rotation.y = time * 0.5 + sceneRef.current.mouseX * 0.2;
        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;