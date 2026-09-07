"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkProject {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  image: string;
  overlayColor: string;
  link: string;
}

const projects: WorkProject[] = [
  {
    id: 1,
    title: "",
    subtitle: "",
    date:"",
    category: "",
    image: "/images/fepohero2.jpg",
    overlayColor: "from-amber-950/70 via-orange-950/40 to-amber-900/80",
    link: "#",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    date: "",
    category: "",
    image: "/images/fepohero4.jpg",
    overlayColor: "from-blue-950/80 via-blue-900/50 to-indigo-950/80",
    link: "#",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    date: "",
    category: "",
    image: "/images/fepohero3.jpg",
    overlayColor: "from-teal-950/80 via-emerald-900/50 to-teal-950/80",
    link: "#",
  },
];

// Single Project Card Component
const ProjectCard = ({ project }: { project: WorkProject }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Cursor Follower State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Scroll Progress for 3D Stacking Effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });

  // 3D Stacking Transform Mapping
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8, 1],
    [28, 0, -22, -22],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8, 1],
    [0.92, 1, 0.83, 0.83],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.75, 1],
    [0.6, 1, 1, 0.45, 0.25],
  );
  const y = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], [90, 0, -60, -60]);

  return (
    <div
      style={{ perspective: "1200px" }}
      className="w-full -mt-10 sm:-mt-14 md:-mt-20 first:mt-0"
    >
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-7xl mx-auto h-[440px] sm:h-[500px] md:h-[540px] rounded-[28px] overflow-hidden bg-black select-none border border-white/20 cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Color Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${project.overlayColor} mix-blend-multiply opacity-90 pointer-events-none`}
        />

        {/* Top Info Bar */}
        <div className="absolute top-6 sm:top-8 inset-x-6 sm:inset-x-8 flex items-center justify-between z-10 font-interd pointer-events-none">
          <span className="text-xs sm:text-sm font-medium text-white/90">
            {project.date}
          </span>
          <span className="text-xs sm:text-sm font-medium text-white/90">
            {project.category}
          </span>
        </div>

        {/* Center Title & Subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 font-interd pointer-events-none">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-normal text-white/80 max-w-md">
            {project.subtitle}
          </p>
        </div>

        {/* FIXED DYNAMIC CURSOR FOLLOWER BADGE */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 50,
            pointerEvents: "none",
          }}
          animate={{
            x: mousePos.x - 24, // Centers 48px circle on cursor
            y: mousePos.y - 24,
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.1,
          }}
          className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-2xl"
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="works" className="w-full bg-white text-black py-10 md:py-14 px-4 md:px-6 lg:px-12 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          {/* Top Tag */}
          <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
            <span className="text-[#2563EB] font-medium">//</span>
            <span className="text-gray-700">FEATURED WORK</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
            Our Creative Work
          </h2>
        </div>

        {/* 3 Project Cards List with Overlapping Tight Stacking */}
        <div className="flex flex-col items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
