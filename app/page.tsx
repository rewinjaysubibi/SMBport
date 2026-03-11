import Image from "next/image"
import { About } from "@/components/About"
import { Contact } from "@/components/Navigation/Contact"
import { Hero } from "@/components/Hero"
import { Experience } from "@/components/Navigation/Experience"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Navbar } from "@/components/Navigation"

export default function Page() {
  return (
    <div className="font-georgia flex min-h-screen flex-col bg-[#F5F0E8] text-[#1A1A1A] selection:bg-[#1B2A4A] selection:text-[#F5F0E8]">
      {/* Navbar */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="mx-auto max-w-5xl flex-1 px-6">
        {/* Professional Portfolio Image */}
        <div className="relative z-0 mx-auto mt-25 h-64 w-64 overflow-hidden rounded-full border-4 border-[#1A1A1A] shadow-lg">
          <img
            src="final3.jpg" // your uploaded image in public/images
            alt="Portfolio Image"
          />
        </div>

        {/* Hero section */}
        <div className="-mt-30 pt-12 pb-16 md:pt-16 md:pb-20">
          <Hero />
        </div>

        {/* About + Skills section */}
        <div className="relative mt-12 border-t border-[#C4B9A8] pt-12">
          <div className="pointer-events-none absolute top-12 left-1/2 hidden h-full w-px -translate-x-1/2 bg-[#C4B9A8] md:block" />
          <div className="grid gap-12 md:grid-cols-2">
            <div className="md:pr-12">
              <About />
            </div>
            <div className="md:pl-12">
              <Skills />
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className="mt-12">
          <Projects />
        </div>

        {/* Experience section */}
        <div className="mt-12">
          <Experience />
        </div>

        {/* Contact section */}
        <div className="mt-12">
          <Contact />
        </div>
      </main>
    </div>
  )
}
