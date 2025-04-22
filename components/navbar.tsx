"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Modal from '../components/Modal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-3 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Gradient glow effect */}
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            
            <div className="relative py-3 px-6 rounded-full bg-black/95">
              <div className="flex items-center justify-between relative">
                {/* Logo */}
                <a 
                  href="#home" 
                  className="flex items-center z-10"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                  }}
                >
                  <span className="text-2xl font-semibold text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      ⭐
                    </span>
                    Abenezer Kifle
                  </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 z-10">
                  <a
                    href="#services"
                    className="text-base font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('services')
                    }}
                  >
                    Services
                  </a>
                  <a
                    href="#experience"
                    className="text-base font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('experience')
                    }}
                  >
                    Experience
                  </a>
                  <a
                    href="#testimonials"
                    className="text-base font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('testimonials')
                    }}
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    className="text-base font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('contact')
                    }}
                  >
                    Contact
                  </a>
                  <div className="relative inline-flex group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                    <button
                      className="relative text-base font-medium px-6 py-2 bg-black/90 rounded-full text-white transition-colors cursor-pointer flex items-center gap-2"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <span className="text-lg">⭐</span>
                      Hire Me
                    </button>
                  </div>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-6 rounded-2xl bg-black/95">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-base font-medium text-white/90 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('services')
                }}
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-base font-medium text-white/90 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="text-base font-medium text-white/90 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('testimonials')
                }}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-white/90 hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Contact
              </a>
              <div className="relative inline-flex group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <button
                  className="relative text-base font-medium px-6 py-2 bg-black/90 rounded-full text-white transition-colors cursor-pointer flex items-center gap-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="text-lg">⭐</span>
                  Hire Me
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
