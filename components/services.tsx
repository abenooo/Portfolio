"use client"

import { LayoutGrid, Paintbrush2, Framer, Smartphone, Settings, Palette } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: "Website Development",
    description: "Creating stunning static and dynamic websites with modern technologies. From personal portfolios to complex e-commerce platforms, we deliver responsive, fast, and SEO-optimized websites that drive results.",
    icon: <LayoutGrid className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    images: [
      "/images/hhs.png",
      "/images/sml.png",
      "/images/codex.png",
      "/images/abenezer.png"
    ],
    height: "h-[66.67%]"
  },
  {
    title: "Mobile App Development",
    description: "Building powerful, user-friendly mobile applications for iOS and Android. We create seamless, feature-rich apps that provide exceptional user experiences and meet your business objectives.",
    icon: <Smartphone className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    height: "h-[33.33%]"
  },
  {
    title: "Automation Solutions",
    description: "Streamlining your workflow with custom automation solutions. We help reduce manual tasks, increase efficiency, and save time by automating repetitive processes using cutting-edge technologies.",
    icon: <Settings className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    images: [
      "/images/sml.png",
      "/images/sml.png",
      "/images/sml.png",
      "/images/sml.png"
    ],
    height: "h-[33.33%]"
  },
  {
    title: "Social Media & Design",
    description: "Boosting your brand's online presence with strategic social media management and eye-catching graphic design. We create engaging content and stunning visuals that help you stand out in the digital landscape.",
    icon: <Palette className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    images: [
      "/images/sml.png",
      "/images/sml.png",
      "/images/sml.png",
      "/images/sml.png"
    ],
    height: "h-[66.67%]"
  }
]

function ImageCarousel({ images }: { images?: string[] }) {
  if (!images) return null;
  
  return (
    <div className="mt-4 relative h-[200px] overflow-hidden rounded-xl">
      <div className="flex animate-carousel-fast">
        {/* Show 3 sets of images to ensure smooth infinite loop */}
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[200px] flex-shrink-0 px-4"
          >
            <Image
              src={image}
              alt="Project preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Added section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services I Provide
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] mx-auto rounded-full mb-4"></div>
          {/* <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering high-quality solutions across web development, mobile applications, and digital services
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[800px]">
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
              <div className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[2].height} border-t border-white/10`}>
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
              <div className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[3].height} border-t border-white/10`}>
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