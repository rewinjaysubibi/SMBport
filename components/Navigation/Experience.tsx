import React from "react"
import { FadeIn } from "../FadeIn"
export function Experience() {
  const experiences = [
    {
      date: "2023 — Present",
      role: "Senior Software Engineer",
      company: "Stripe",
      description:
        "Leading the frontend architecture for the billing platform. Improved dashboard load times by 40%.",
    },
    {
      date: "2020 — 2023",
      role: "Software Engineer",
      company: "Vercel",
      description:
        "Core contributor to Next.js. Developed key features for the edge runtime and routing system.",
    },
    {
      date: "2018 — 2020",
      role: "Frontend Developer",
      company: "Acme Startup (YC S18)",
      description:
        "First engineering hire. Built the MVP from scratch and scaled the platform to 100k+ MAU.",
    },
  ]
  return (
    <section id="experience" className="border-t border-[#C4B9A8] py-12">
      <FadeIn>
        <div className="mb-8 border-b border-[#C4B9A8] pb-2">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            CAREERS
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-b border-[#C4B9A8] pb-6 last:border-0 last:pb-0"
            >
              <div className="mb-2 text-[11px] tracking-[0.2em] text-[#1A1A1A] uppercase">
                {exp.date}
              </div>
              <h3 className="font-georgia text-xl font-bold text-[#1A1A1A]">
                {exp.role}
              </h3>
              <div className="mb-2 text-[#1A1A1A] italic">{exp.company}</div>
              <p className="text-sm leading-relaxed text-[#1A1A1A]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
