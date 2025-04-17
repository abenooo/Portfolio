"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 md:mt-2 md:rounded-full md:border md:border-gray-200 md:shadow-sm bg-white/80 backdrop-blur-md">
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
            <span className="text-sm font-medium text-gray-800">Abenezer Kifle</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 z-10">
            <a
              href="#about"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('experience')
              }}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
            {/* services */}
            <a href="#services" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('services')
              }}
            >
              Services
            </a>
            {/* testimonials */}
            <a href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('testimonials')
              }}
            >
              Testimonials
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5 text-gray-800" /> : <Menu className="h-5 w-5 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 rounded-lg border border-gray-200 shadow-sm bg-white/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors py-1"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors py-1"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('experience')
                }}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors py-1"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors py-1"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
