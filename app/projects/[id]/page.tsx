import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Project } from "@/lib/projects"
import { projects } from "@/lib/projects"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === Number(params.id))
  
  if (!project) return null

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="space-y-8">
          <div className="aspect-[21/9] relative rounded-3xl overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
              quality={90}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
            <div className="flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xl text-white/80">{project.description}</p>

          {project.details && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Project Details</h2>
              <p className="text-white/80">{project.details}</p>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-full bg-white/10 text-sm hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 