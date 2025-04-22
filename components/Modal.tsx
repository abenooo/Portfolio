"use client"

import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#111] rounded-2xl p-8 max-w-md w-full mx-4 border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Work Together! 🚀
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 mb-6">
            Ready to bring your ideas to life? Hire me on Upwork and let's create something amazing together!
          </p>
          
          <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <a
              href="https://www.upwork.com/freelancers/abenezerkifle2"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-black/80 transition-colors"
            >
              Hire Me Now 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 