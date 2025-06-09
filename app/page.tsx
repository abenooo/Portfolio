"use client"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import AboutMe from "@/components/About"
import Services from "@/components/services"
import Project from "@/components/Project"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/Contact"
export default function Page() {
  return (
    <div>
      <Navbar />
      <Services/>
      <AboutMe />
      <Project/>
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  )
}
