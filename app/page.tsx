import { About } from "@/components/About"
import { Contact } from "@/components/Navigation/Contact"
import { Hero } from "@/components/Hero"
import { Experience } from "@/components/Navigation/Experience"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Navbar } from "@/components/Navigation"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col px-6 md:px-12 lg:px-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero section: add padding-top so it won't overlap Navbar */}
      <div className="mt-20 mb-12">
        {" "}
        {/* adjust mt-20 based on Navbar height */}
        <Hero />
      </div>

      {/* Split layout: About + Skills */}
      <main className="mx-auto mb-12 w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start md:gap-0">
          {/* Left Column: About */}
          <div className="md:col-span-7 md:pr-12">
            <About />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:mx-4 md:block md:w-px md:bg-[#C4B9A8]" />

          {/* Right Column: Skills */}
          <div className="md:col-span-4 md:pl-12">
            <Skills />
          </div>
        </div>
      </main>

      {/* Projects section */}
      <div className="mx-auto mb-12 w-full max-w-5xl">
        <Projects />
      </div>

      {/* Experience section */}
      <div className="mx-auto mb-12 w-full max-w-5xl">
        <Experience />
      </div>

      {/* Contact section */}
      <div className="mx-auto mb-12 w-full max-w-5xl">
        <Contact />
      </div>
    </div>
  )
}
