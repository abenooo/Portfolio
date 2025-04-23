"use client"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import AboutMe from "@/components/About"
import Services from "@/components/services"
import Project from "@/components/Project"
export default function Page() {
  return (
    <div>
      <Navbar />
      <Services/>
      <AboutMe />
      <Project/>
      <Footer />
    </div>
  )
}
