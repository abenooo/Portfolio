"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "/images/testimonials/user1.jpg",
    rating: 5,
    comment: "Exceptional web development service! The team delivered our e-commerce platform ahead of schedule with outstanding quality.",
  },
  {
    name: "Michael Chen",
    role: "Founder, DesignHub",
    image: "/images/testimonials/user2.jpg",
    rating: 5,
    comment: "The mobile app development was flawless. Professional, responsive, and highly skilled team. Highly recommended!",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director",
    image: "/images/testimonials/user3.jpg",
    rating: 5,
    comment: "Outstanding UI/UX design work. They transformed our website into a modern, user-friendly platform.",
  },
  {
    name: "David Kim",
    role: "CTO, InnovateTech",
    image: "/images/testimonials/user4.jpg",
    rating: 5,
    comment: "The automation solutions they implemented have significantly improved our business efficiency.",
  },
  {
    name: "Lisa Patel",
    role: "E-commerce Manager",
    image: "/images/testimonials/user5.jpg",
    rating: 5,
    comment: "Seamless payment integration and excellent support. Our online sales have increased by 40%!",
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    image: "/images/testimonials/user6.jpg",
    rating: 5,
    comment: "The team's expertise in bot development helped us automate our customer service effectively.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] mx-4">
      <div className="relative group">
        <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[20px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
        <div className="absolute inset-[1px] bg-[#111] rounded-[20px]" />
        <div className="relative p-6 rounded-[20px] bg-transparent hover:bg-[#161616] transition-colors duration-300 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            "{testimonial.comment}"
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-black"  id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] mx-auto rounded-full mb-4"></div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-carousel">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 