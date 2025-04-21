"use client"

import { LayoutGrid, Paintbrush2, Framer } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: "Website Design",
    description: "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand",
    icon: <LayoutGrid className="w-6 h-6" />,
    images: [
      "/images/static.png",
      "/images/static.png",
      "/images/static.png",
      "/images/static.png"
    ],
    height: "h-[66.67%]"
  },
  {
    title: "Logo Design",
    description: "Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision",
    icon: <Paintbrush2 className="w-6 h-6" />,
    height: "h-[33.33%]"
  },
  {
    title: "Framer Design",
    description: "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience",
    icon: <Framer className="w-6 h-6" />,
    images: [
      "/images/abenezer.png",
      "/images/abenezer.png",
      "/images/abenezer.png",
      "/images/abenezer.png"
    ],
    height: "h-[33.33%]"
  },
  {
    title: "Graphic Design",
    description: "Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience",
    icon: <Paintbrush2 className="w-6 h-6" rotate={45} />,
    images: [
      "/images/abenezer.png",
      "/images/abenezer.png",
      "/images/abenezer.png",
      "/images/abenezer.png"
    ],
    height: "h-[66.67%]"
  }
]

function ImageCarousel({ images }: { images?: string[] }) {
  if (!images) return null;
  
  return (
    <div className="mt-4 relative h-[200px] overflow-hidden rounded-xl">
      <div className="flex animate-carousel">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[200px] flex-shrink-0"
          >
            <Image
              src={image}
              alt="Project preview"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[800px]">
      {/* First column */}
      <div className="flex flex-col gap-6">
        {/* First service card with border glow */}
        <div className="relative group">
          {/* Updated glow effect - now with a smaller spread and higher opacity */}
          <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
          {/* Added an inner background to prevent text blur */}
          <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
          <div className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[0].height} border-t border-white/10`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                {services[0].icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {services[0].title}
              </h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              {services[0].description}
            </p>
            <ImageCarousel images={services[0].images} />
          </div>
        </div>

        {/* Second service card with border glow */}
        <div className="relative group">
          <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
          <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
          <div className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[1].height} border-t border-white/10`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                {services[1].icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {services[1].title}
              </h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {services[1].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Second column - reversed height order */}
      <div className="flex flex-col gap-6">
        {/* Third service card with border glow */}
        <div className="relative group">
          <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
          <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
          <div className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[1].height} border-t border-white/10`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                {services[2].icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {services[2].title}
              </h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {services[2].description}
            </p>
          </div>
        </div>

        {/* Fourth service card with border glow */}
        <div className="relative group">
          <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
          <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
          <div className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[0].height} border-t border-white/10`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                {services[3].icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {services[3].title}
              </h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              {services[3].description}
            </p>
            <ImageCarousel images={services[3].images} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}