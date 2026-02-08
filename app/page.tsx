import dynamic from "next/dynamic"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"

const Services = dynamic(() => import("@/components/sections/Services").then((mod) => mod.Services))
const HomeVisit = dynamic(() => import("@/components/sections/HomeVisit").then((mod) => mod.HomeVisit))
const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About))
const Benefits = dynamic(() => import("@/components/sections/Benefits").then((mod) => mod.Benefits))
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials))
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact))

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
