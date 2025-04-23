"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Project as ProjectType } from "@/lib/projects"
import { projects } from "@/lib/projects"

// Reusable component for project tags
const ProjectTag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium">{children}</span>
)

// Update ProjectCard to use navigation instead of modal
const ProjectCard = ({ project, style }: { project: any; style: any }) => {
  const router = useRouter()

  return (
    <motion.div
      onClick={() => router.push(`/projects/${project.id}`)}
      style={{
        ...style,
        zIndex: style.zIndex || "auto",
      }}
      className="absolute inset-0 flex items-center justify-center h-screen will-change-transform cursor-pointer isolate"
    >
      <div className="max-w-7xl w-full h-full md:h-auto md:aspect-[16/9] relative rounded-3xl overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            filter: `blur(${style.blur}px)`,
            transition: "filter 0.5s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10"></div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"
            style={{
              opacity: style.gradientOpacity,
            }}
          />
        </motion.div>

        <motion.div className="absolute top-6 left-6 z-10 flex gap-2" style={{ opacity: style.contentOpacity }}>
          {project.tags.map((tag: string) => (
            <ProjectTag key={tag}>{tag}</ProjectTag>
          ))}
        </motion.div>

        <motion.div className="absolute top-6 right-6 z-10" style={{ opacity: style.contentOpacity }}>
          <ProjectTag>{project.year}</ProjectTag>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10"
          style={{
            opacity: style.contentOpacity,
            transform: `translateZ(${style.contentZ}px)`,
            transition: "transform 0.8s ease-out",
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">{project.title}</h2>
          <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md max-w-2xl">{project.description}</p>
          <motion.div
            className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-lg font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            View
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Project() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="relative bg-black isolate">
      <div className="h-[400vh] relative z-10" ref={containerRef}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {projects.map((project: ProjectType, index: number) => (
            <ProjectSection
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
              containerRef={containerRef}
            />
          ))}
        </div>

        <motion.div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
          initial={{ y: -10, opacity: 0.5 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-white drop-shadow-md" />
        </motion.div>
      </div>
    </section>
  )
}

function ProjectSection({
  project,
  index,
  totalProjects,
  containerRef,
}: {
  project: ProjectType
  index: number
  totalProjects: number
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  })

  const sectionHeight = 1 / totalProjects
  const sectionStart = index * sectionHeight
  const sectionEnd = sectionStart + sectionHeight

  const y = useTransform(scrollYProgress, [sectionStart, sectionEnd], ["0vh", "-100vh"])

  const scale = useTransform(
    scrollYProgress,
    [sectionStart, sectionStart + sectionHeight * 0.5, sectionEnd],
    [1, 1.05, 0.85],
  )

  const blur = useTransform(scrollYProgress, [sectionStart, sectionStart + sectionHeight * 0.3], [0, 12])

  const contentOpacity = useTransform(
    scrollYProgress,
    [sectionStart, sectionStart + sectionHeight * 0.1, sectionStart + sectionHeight * 0.4],
    [1, 1.2, 0],
  )

  const gradientOpacity = useTransform(scrollYProgress, [sectionStart, sectionStart + sectionHeight * 0.3], [0.4, 0.9])

  const contentZ = useTransform(scrollYProgress, [sectionStart, sectionStart + sectionHeight * 0.2], [0, 20])

  const zIndex = totalProjects - index

  return (
    <ProjectCard
      project={project}
      style={{
        y,
        scale,
        blur,
        contentOpacity,
        gradientOpacity,
        zIndex,
        contentZ,
      }}
    />
  )
}

