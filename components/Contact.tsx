"use client"

import { MapPin, Mail, Phone, Calendar, Globe, Linkedin } from "lucide-react"
import { useState } from "react"

const contactInfo = {
  name: "Abenezer Kifle",
  location: "Addis Ababa, Ethiopia",
  timezone: "UTC+3",
  email: "abenezerkifle000@gmail.com",
  phone: "+251910979060",
  birthday: "March 14",
  linkedin: "linkedin.com/in/abenezer-kifle",
  websites: [
    { name: "Codex Africa", url: "https://codexafrica.com" },
  ]
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] mx-auto rounded-full mb-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#111] rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4 text-white text-base">
              <div>
                <div className="font-semibold">Location</div>
                <div>{contactInfo.location}</div>
                <div className="text-gray-400 text-sm">Timezone: {contactInfo.timezone}</div>
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#44BCFF] transition-colors">{contactInfo.email}</a>
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-[#44BCFF] transition-colors">{contactInfo.phone}</a>
              </div>
              <div>
                <div className="font-semibold">Birthday</div>
                <div>{contactInfo.birthday}</div>
              </div>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#44BCFF] transition-colors"
                >
                  {contactInfo.linkedin}
                </a>
              </div>
              <div>
                <div className="font-semibold">Websites</div>
                <ul className="list-disc list-inside">
                  {contactInfo.websites.map((site, idx) => (
                    <li key={idx}>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#44BCFF] transition-colors"
                      >
                        {site.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-[#111] rounded-[32px] p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-white/10 focus:border-[#44BCFF] outline-none"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-white/10 focus:border-[#44BCFF] outline-none"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-white/10 focus:border-[#44BCFF] outline-none"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-[#222] text-white border border-white/10 focus:border-[#44BCFF] outline-none"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-white font-bold text-lg shadow-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 