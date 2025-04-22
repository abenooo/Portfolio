"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

// Reusable component for project tags
const ProjectTag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium">{children}</span>
)

// Reusable component for project cards
const ProjectCard = ({ project, style }: { project: any, style: any }) => (
  <motion.div style={style} className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-7xl w-full h-full md:h-auto md:aspect-[16/9] relative rounded-3xl overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute top-6 left-6 z-10 flex gap-2">
        {project.tags.map((tag: any) => (
          <ProjectTag key={tag}>{tag}</ProjectTag>
        ))}
      </div>

      <div className="absolute top-6 right-6 z-10">
        <ProjectTag>{project.year}</ProjectTag>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">{project.title}</h2>
        <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md max-w-2xl">{project.description}</p>
        <button className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-lg font-medium hover:scale-110 transition-transform">
          View
        </button>
      </div>
    </div>
  </motion.div>
)

export default function Project() {
  const containerRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "LUXE BEAUTY",
      description:
        "Revolutionizing Luxe Beauty's online presence with cutting-edge web design and robust web development.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop",
      tags: ["Web Design", "Web Development"],
      year: "2023",
    },
    {
      id: 2,
      title: "MODERN SPACES",
      description: "Creating an immersive digital experience for a premium interior design studio.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
      tags: ["UX Design", "Web Development"],
      year: "2023",
    },
    {
      id: 3,
      title: "ECHO AUDIO",
      description: "Designing and developing a responsive e-commerce platform for high-end audio equipment.",
      image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=1600&auto=format&fit=crop",
      tags: ["E-commerce", "Web Development"],
      year: "2022",
    },
    {
      id: 4,
      title: "VERDE ORGANICS",
      description:
        "Building a sustainable brand presence with eco-friendly design principles and optimized performance.",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=1600&auto=format&fit=crop",
      tags: ["Branding", "Web Design"],
      year: "2022",
    },
  ]

  return (
    <div className="h-[500vh]" ref={containerRef}>
      <div className="fixed inset-0 overflow-hidden">
        {/* Render projects in reverse order so first project is at the bottom of the stack */}
        {[...projects].reverse().map((project, reversedIndex) => {
          // Convert back to original index for calculations
          const index = projects.length - 1 - reversedIndex

          return (
            <ProjectSection
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
              containerRef={containerRef}
            />
          )
        })}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        initial={{ y: -10, opacity: 0.5 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-white drop-shadow-md" />
      </motion.div>
    </div>
  )
}

function ProjectSection({ project, index, totalProjects, containerRef }: { project: any, index: number, totalProjects: number, containerRef: any }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  })

  // Calculate when this project should be visible
  const sectionHeight = 1 / totalProjects
  const sectionStart = index * sectionHeight
  const sectionEnd = sectionStart + sectionHeight

  // Modified animation values for sequential stacking
  const y = useTransform(
    scrollYProgress,
    [
      sectionStart, // Start of section
      Math.min(sectionStart + 0.1, sectionEnd), // Initial hold
      Math.min(sectionStart + 0.4, sectionEnd), // Start moving
      sectionEnd // End of section
    ],
    [
      '100vh', // Start off-screen below
      '0vh',   // Move to center
      '0vh',   // Hold in center
      '-100vh' // Move off-screen above
    ]
  )

  const opacity = useTransform(
    scrollYProgress,
    [
      sectionStart,
      Math.min(sectionStart + 0.1, sectionEnd),
      Math.min(sectionStart + 0.4, sectionEnd),
      sectionEnd
    ],
    [0, 1, 1, 0]
  )

  // Remove rotation for cleaner transitions
  const scale = useTransform(
    scrollYProgress,
    [sectionStart, Math.min(sectionStart + 0.4, sectionEnd), sectionEnd],
    [0.8, 1, 0.8]
  )

  return <ProjectCard project={project} style={{ y, scale, opacity }} />
}
