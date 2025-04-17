"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Twitter, Linkedin, Settings, Monitor, Circle, ExternalLink, Github, Globe, Mail } from "lucide-react"
import Image from "next/image"

// Sample work history data
const workHistoryData = [
  {
    id: 1,
    company: "Commercial Bank of Ethiopia",
    position: "Full Stack Engineer",
    duration: "Nov 2021 - Present · 3 yrs 6 mos",
    location: "Addis Ababa, Ethiopia",
    projects: [
      {
        name: "Infinity Mobile and Internet Banking",
        description: "Led development of CBE's flagship mobile banking application and web platform, providing comprehensive banking services to millions of customers.",
        tools: ["React.js", "Fabric", "Javascript", "TypeScript", "API", "Ci/Cd", "Nextjs", "Tailwindcss", "Docker", "postgres"]
      },
      {
        name: "Secure Archive System",
        description: "Developed a secure document archiving system for foreign banks, implementing robust security measures and efficient document management.",
        tools: ["Next.js", "TypeScript", "MongoDB", "Authentication", "Strapi","Nginx"]
      },
      {
        name: "Event Addis",
        description: "Event discovery platform that enables customers to find and purchase tickets for events happening near them.",
        tools: ["Strapi.js", "React.js", "Next.js", "Tailwind CSS", "Payment Integration"]
      }
    ],
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Hyperledger Fabric",
      "Strapi.js",
      "PostgreSQL",
      "AWS",
      "CI/CD",
      "System Architecture",
      "API Development"
    ],
    responsibilities: [
      "Led development of Infinity mobile banking app and web platform",
      "Architected and implemented Hyperledger Fabric backend solutions",
      "Developed secure document archiving system for foreign banks",
      "Built ticket purchasing and event management platform",
      "Implemented secure payment integration systems",
      "Managed deployment and CI/CD pipelines",
      "Collaborated with cross-functional teams for feature delivery"
    ]
  },
  {
    id: 2,
    company: "CodeX Africa",
    position: "Founder",
    duration: "Feb 2024 - Present · 1 yr 3 mos",
    location: "Addis Ababa, Ethiopia · Hybrid",
    projects: [
        {
            name: "Solomon Mulugeta Law Office Website",
            url: "https://solomonmualawoffice.com/",
            description: "Designed and developed a professional law firm website for Solomon Mulugeta & Associates, showcasing their legal services across Ethiopia.",
            tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
          },
      {
        name: "Expense Tracker Mobile App",
        // url: "https://play.google.com/store/apps/details?id=your.app.id",
        description: "Developed and published a cross-platform expense tracking application for iOS and Android using Flutter, helping users manage their personal finances effectively.",
        tools: ["Flutter", "Dart", "Firebase", "Google Play Console", "App Store Connect"]
      },
     
      {
        name: "Digital Marketing Campaigns",
        description: "Managed and optimized social media marketing campaigns across Facebook, TikTok, and Instagram for various companies, improving their online presence and engagement.",
        tools: ["Facebook Ads", "TikTok Ads", "Instagram Marketing", "Social Media Analytics"]
      }
    ],
    skills: [
      "Flutter",
      "Next.js",
      "TypeScript",
      "Social Media Marketing",
      "Project Management",
      "Mobile App Development",
      "Web Development",
      "Digital Marketing",
      "UI/UX Design"
    ],
    responsibilities: [
      "Led development of cross-platform mobile applications using Flutter",
      "Designed and developed responsive websites for professional services",
      "Managed digital marketing campaigns across multiple social platforms",
      "Coordinated with clients to deliver solutions matching their business needs",
      "Published and maintained applications on Google Play Store",
      "Implemented modern web technologies for optimal user experience",
      "Optimized social media marketing strategies for business growth"
    ]
  },
  
  {
    id: 4,
    company: "Nedamco Africa",
    position: "Cloud Engineer Intern",
    duration: "Dec 2023 - Mar 2024 · 4 mos",
    location: "Netherlands · Remote",
    projects: [
      {
        name: "Cloud Infrastructure Projects",
        description: "Implemented real-time cloud solutions using AWS and Azure services, gaining hands-on experience in cloud architecture and deployment.",
        tools: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        description: "Fundamental understanding of AWS Cloud services, architecture, security, and pricing"
      },
      {
        name: "Microsoft Azure Fundamentals",
        issuer: "Microsoft",
        date: "2024",
        description: "Core knowledge of Azure services, cloud concepts, security, and compliance"
      }
    ],
    skills: [
      "AWS Services",
      "Azure Cloud Platform",
      "Cloud Architecture",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Infrastructure as Code",
      "Cloud Security",
      "Serverless Computing"
    ],
    responsibilities: [
      "Earned AWS Cloud Practitioner and Azure Fundamentals certifications",
      "Developed and deployed cloud-native applications",
      "Implemented infrastructure as code using Terraform",
      "Managed containerized applications with Docker and Kubernetes",
      "Created automated CI/CD pipelines for cloud deployments",
      "Designed scalable and secure cloud architectures",
      "Optimized cloud resources for cost efficiency"
    ],
    achievements: [
      "Successfully completed both AWS and Azure certification programs",
      "Implemented real-world cloud solutions using both platforms",
      "Gained practical experience in cloud architecture and deployment",
      "Developed expertise in cloud security and best practices"
    ]
  },
  {
    id: 5,
    company: "oLab - A People First Company",
    position: "Frontend Developer",
    duration: "Jan 2023 - Dec 2023 · 1 yr",
    location: "Australia · Remote",
    projects: [
      {
        name: "Happy House Sitters Platform",
        url: "https://www.happyhousesitters.com.au/",
        description: "Australia's leading house and pet sitting platform connecting homeowners with trusted sitters since 1999.",
        tools: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
      },
      {
        name: "Onboarding Automation System",
        description: "Developed an automated onboarding system using Telegram bot, integrating with Make.com and company workflows.",
        tools: ["Node.js", "Telegram Bot API", "Make.com", "Google Sheets", "Zapier"]
      }
    ],
    automationWork: {
      platforms: ["Make.com", "Zapier", "Google Sheets", "Telegram Bot"],
      workflows: [
        "Employee onboarding automation",
        "Document processing and distribution",
        "Task assignment and tracking",
        "Automated notifications and reminders"
      ]
    },
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Make.com",
      "Zapier",
      "Google Sheets",
      "Telegram Bot API",
      "API Integration",
      "Workflow Automation"
    ],
    responsibilities: [
      "Led frontend development of the Happy House Sitters platform",
      "Built and maintained responsive, user-friendly interfaces",
      "Developed Telegram bot for streamlined employee onboarding",
      "Created automated workflows using Make.com and Zapier",
      "Integrated multiple systems for efficient data flow",
      "Implemented Google Sheets automation for data management",
      "Optimized business processes through automation solutions"
    ]
  },
]

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedJob, setSelectedJob] = useState(workHistoryData[0].id)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 font-sans">
      {/* <div id="home" > */}
        {/* <div className="space-y-4">
          <div className="text-gray-500 text-6xl font-light leading-tight">Designing experiences</div>
          <h1 className="text-6xl font-bold leading-tight">that solve real problems.</h1>
        </div> */}
      {/* </div> */}

      <div id="about" className="pt-20">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div
              className="relative rounded-lg overflow-hidden bg-teal-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/abenezer.png"
                alt="Abenezer Kifle"
                width={400}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2">
                <motion.a
                  href="https://x.com/kifle_abenezer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-blue-500"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/abenezer-kifle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://github.com/abenooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-purple-700"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href="https://codexafrica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-green-600"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe size={18} />
                </motion.a>
                <motion.a
                  href="mailto:abenezerkifle000@gmail.com"
                  className="bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-red-500"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>

            <div className="mt-4">
                  <h2 className="text-2xl font-bold">Abenezer Kifle</h2>
              <p className="text-gray-600">Full-stack Developer</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">My work history</h3>
              <div className="space-y-2">
                {workHistoryData.map((job) => (
                  <WorkHistoryListItem
                    key={job.id}
                    job={job}
                    isSelected={selectedJob === job.id}
                    onClick={() => setSelectedJob(job.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                >
                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                    <h3 className="text-2xl font-bold mb-2">I love turning ideas into something real through design.</h3>
                    <p className="text-gray-600 text-lg">
                      What started as a hobby turned into a career when I discovered how design can make things both look
                      great and work better.
                    </p>
                  </motion.div>

                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl font-bold mb-2">
                      I focus on creating user interfaces that serve a real purpose
                    </h3>
                    <p className="text-gray-600 text-lg">
                      - making sure they're not just pretty, but actually solve problems. Whether I'm working on a mobile
                      app or a website, my goal is to make something that feels natural and easy to use.
                    </p>
                  </motion.div>

                  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-2xl font-bold mb-2">
                      I'm a bit of a perfectionist when it comes to the small stuff,
                    </h3>
                    <p className="text-gray-600 text-lg">
                      but I think that's what makes good design great. This attention to detail helps me build strong
                      relationships with clients, as they know I'll put the same care into their project that they would.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex justify-center mt-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    <Image
                      src="/images/abenezer.png"
                      alt="Signature"
                      width={200}
                      height={100}
                      className="w-32"
                    />
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="h-4 w-4 rounded-full bg-black"></div>
                  </motion.div>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedJob}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg border p-6"
                  >
                    <JobDetails job={workHistoryData.find((job) => job.id === selectedJob)} />
                  </motion.div>
                </AnimatePresence>
              )}
            </AnimatePresence>

            <motion.button
              onClick={toggleExpand}
              className={`mt-8 flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors mx-auto`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  <span>Hide about me</span>
                  <X size={16} />
                </>
              ) : (
                <>
                  <span>Show about me</span>
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <div id="experience" className="pt-20">
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">My work history</h3>
          <div className="space-y-2">
            {workHistoryData.map((job) => (
              <WorkHistoryListItem
                key={job.id}
                job={job}
                isSelected={selectedJob === job.id}
                onClick={() => setSelectedJob(job.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="pt-20">
        {/* Your existing projects content */}
      </div>

      <div id="contact" className="pt-20">
        {/* Your existing contact content */}
      </div>
    </div>
  )
}

function WorkHistoryListItem({ job, isSelected, onClick }: { job: any, isSelected: boolean, onClick: () => void }) {
  return (
    <motion.div
      className={`border rounded-lg p-2.5 cursor-pointer transition-all ${
        isSelected ? "border-blue-500 bg-blue-50" : "hover:border-gray-400"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h4 className="font-bold text-base">{job.company}</h4>
      <p className="text-gray-700 text-sm">{job.position}</p>
      <p className="text-gray-500 text-xs">{job.duration}</p>
      {isSelected && (
        <motion.div
          className="mt-1 text-blue-600 text-xs flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>View details</span>
          <ChevronDown className="rotate-270" size={12} />
        </motion.div>
      )}
    </motion.div>
  )
}

function JobDetails({ job }: { job: any }) {
  if (!job) return null

  // Function to get the correct logo path based on company
  const getCompanyLogo = (company: string) => {
    switch (company) {
      case "Commercial Bank of Ethiopia":
        return "/images/cbe.png"
      case "CodeX Africa":
        return "/images/codex.png"
      case "Nedamco Africa":
        return "/images/nedamco.png"
      case "oLab - A People First Company":
        return "/images/oLab.png"
      default:
        return "/images/default-company.png" // Fallback logo
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{job.company}</h2>
            <p className="text-xl text-gray-700">{job.position}</p>
          </div>
          <Image
            src={getCompanyLogo(job.company)}
            alt={`${job.company} logo`}
            width={60}
            height={60}
            className="rounded-lg"
          />
        </div>
        <p className="text-gray-600 font-medium">{job.duration}</p>
        {job.location && <p className="text-gray-600">{job.location}</p>}
      </div>

      {job.projects && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-bold">Key Projects</h3>
          <div className="grid grid-cols-1 gap-4">
            {job.projects.map((project: any, index: number) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, toolIndex: number) => (
                    <span
                      key={toolIndex}
                      className="bg-white/50 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {job.automationWork && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-bold">Automation Solutions</h3>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
            <div className="mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">Platforms Used</h4>
              <div className="flex flex-wrap gap-2">
                {job.automationWork.platforms.map((platform: string, index: number) => (
                  <span
                    key={index}
                    className="bg-white/50 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Automated Workflows</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {job.automationWork.workflows.map((workflow: string, index: number) => (
                  <li key={index}>{workflow}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {job.skills && job.skills.length > 0 && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-bold">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill: string, index: number) => (
              <motion.span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      {job.responsibilities && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg font-bold">Key Achievements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.responsibilities.map((responsibility: string, index: number) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {job.certifications && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-bold">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {job.certifications.map((certification: any, index: number) => (
              <motion.span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
              >
                {certification.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      {job.achievements && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-lg font-bold">Achievements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.achievements.map((achievement: string, index: number) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}
