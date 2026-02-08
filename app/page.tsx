import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { HomeVisit } from "@/components/sections/HomeVisit"
import { About } from "@/components/sections/About"
import { Benefits } from "@/components/sections/Benefits"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HomeVisit />
        <About />
        <Benefits />
        <Testimonials />
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
