import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import AboutMe from "@/components/About"
import Services from "@/components/services"

export default function Page() {
  return (
    <div>
      <Navbar />
      <Services/>
      <AboutMe />
      <Footer />
    </div>
  )
}
