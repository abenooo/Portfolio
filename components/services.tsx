"use client"

import { LayoutGrid, Settings, Palette, Code2, CreditCard, Bot, Cloud } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Business Website",
    description:
      "Custom WordPress plugin development for unique business needs. Specializing in PHP, WordPress, Plugin Development, Custom Code, JavaScript, and CSS.",
    icon: <LayoutGrid className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    images: ["/images/hhs.png", "/images/sml.png", "/images/kurifu_website.png", "/images/kurifu_website1.png"],
    height: "h-[66.67%]",
  },
  {
    title: "Personal Website",
    description:
      "Tailored software solutions using modern tech stack: React, Next.js, Node.js, Express, MongoDB, and API Integration.",
    icon: <Code2 className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    height: "h-[33.33%]",
  },
  {
    title: "E-Commerce",
    description:
      "Comprehensive support for e-commerce platforms including Shopify, WooCommerce, Magento with Payment Gateway and API Integration.",
    icon: <Code2 className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    height: "h-[33.33%]",
  },
  {
    title: "Automation",
    description:
      "Powerful automation solutions using Zapier, Make.com, and Google Sheets to streamline your business processes and boost efficiency.",
    icon: <Settings className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
    images: ["/images/hhs.png", "/images/sml.png", "/images/kurifu_website.png", "/images/kurifu_website1.png"],
    height: "h-[66.67%]",
  },
]

// Add new services for the carousel
const additionalServices = [
  {
    title: "Payment Integration",
    description: "Seamless payment integration with Telebirr, Chapa, PayPal, and Stripe payment gateways.",
    icon: <CreditCard className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
  {
    title: "Bot Development",
    description: "Custom bots for Telegram and other platforms using JavaScript, Node.js, and API Integration.",
    icon: <Bot className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
  {
    title: "UI/UX Design",
    description: "End-to-end UI design and UX research using Figma, Sketch, Adobe XD",
    icon: <Palette className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
  {
    title: "Cloud Solutions",
    description: "Integration of cloud storage and support for seamless business operations.",
    icon: <Cloud className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
  {
    title: "Cloud Solutions",
    description: "Integration of cloud storage and support for seamless business operations.",
    icon: <Cloud className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
  {
    title: "Cloud Solutions",
    description: "Integration of cloud storage and support for seamless business operations.",
    icon: <Cloud className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
  {
    title: "Cloud Solutions",
    description: "Integration of cloud storage and support for seamless business operations.",
    icon: <Cloud className="w-6 h-6 text-white bg-white/10 rounded-full p-1" />,
  },
]

function ImageCarousel({ images }: { images?: string[] }) {
  if (!images) return null

  // Calculate total width: (image width + gap) * number of images
  // For 300px width and 32px gap (mx-4), total = (300 + 32) * images.length
  // But mx-4 is 1rem = 16px, so 32px total per image (left+right)
  const totalWidth = (300 + 32) * (images.length)

  return (
    <div className="mt-4 relative h-[200px] overflow-hidden rounded-xl">
      <div
        className="flex animate-carousel-infinite"
        style={{ width: totalWidth * 2 }}
      >
        {[...images, ...images].map((image, index) => (
          <div key={index} className="relative w-[300px] h-[200px] flex-shrink-0 mx-4">
            <Image src={image || "/placeholder.svg"} alt="Project preview" fill className="object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Update the ServiceCard component to accept a row prop
function ServiceCard({ service, isSecondRow }: { service: any; isSecondRow?: boolean }) {
  return (
    <div className="flex-shrink-0 w-[300px] mx-4">
      <div className="relative group">
        <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[20px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
        <div className="absolute inset-[1px] bg-[#111] rounded-[20px]" />
        <div className={`relative p-6 rounded-[20px] bg-transparent hover:bg-[#161616] transition-colors duration-300 
          ${isSecondRow ? 'border-b' : 'border-t'} border-white/10`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">
              {service.title}
            </h3>
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Added section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services I Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] mx-auto rounded-full mb-4"></div>
        </div>

        <div className="flex flex-col">
          {/* Main services grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First column */}
              <div className="flex flex-col gap-6">
                {/* First service card with border glow */}
                <div className="relative group">
                  {/* Updated glow effect - now with a smaller spread and higher opacity */}
                  <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
                  {/* Added an inner background to prevent text blur */}
                  <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
                  <div
                    className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[0].height} border-t border-white/10`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                        {services[0].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{services[0].title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">{services[0].description}</p>
                    <ImageCarousel images={services[0].images} />
                  </div>
                </div>

                {/* Second service card with border glow */}
                <div className="relative group">
                  <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
                  <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
                  <div
                    className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[1].height} border-t border-white/10`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                        {services[1].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{services[1].title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">{services[1].description}</p>
                  </div>
                </div>
              </div>

              {/* Second column - reversed height order */}
              <div className="flex flex-col gap-6">
                {/* Third service card with border glow */}
                <div className="relative group">
                  <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
                  <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
                  <div
                    className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[2].height} border-t border-white/10`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                        {services[2].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{services[2].title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">{services[2].description}</p>
                  </div>
                </div>

                {/* Fourth service card with border glow */}
                <div className="relative group">
                  <div className="absolute transition-all duration-1000 -inset-[1px] bg-white rounded-[32px] opacity-20 group-hover:opacity-50 group-hover:blur-[2px] group-hover:duration-200" />
                  <div className="absolute inset-[1px] bg-[#111] rounded-[32px]" />
                  <div
                    className={`relative p-8 rounded-[32px] bg-transparent hover:bg-[#161616] transition-colors duration-300 ${services[3].height} border-t border-white/10`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                        {services[3].icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{services[3].title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">{services[3].description}</p>
                    <ImageCarousel images={services[3].images} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] mx-auto rounded-full mb-4"></div>
            </div>
            <div className="relative overflow-hidden">
              {/* First row - left to right with top border */}
              <div className="flex animate-carousel">
                {additionalServices.map((service, index) => (
                  <ServiceCard 
                    key={`row1-${index}`} 
                    service={service}
                    isSecondRow={false}
                  />
                ))}
              </div>

              {/* Second row - right to left with bottom border */}
              <div className="flex animate-carousel-reverse mt-8">
                {additionalServices
                  .slice()
                  .reverse()
                  .map((service, index) => (
                    <ServiceCard 
                      key={`row2-${index}`} 
                      service={service}
                      isSecondRow={true}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
