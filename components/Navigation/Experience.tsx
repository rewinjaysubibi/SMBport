import React from "react"
import { FadeIn } from "../FadeIn"
export function Experience() {
  const experiences = [
    {
      date: "2022 — Present",
      role: "BSIT Student",
      company: "RMMC",
      description:
        "Learning the fundamentals of Information Technology, including programming, web development, and database systems. Building small projects to practice and apply core concepts.",
    },
    {
      date: "2023 — 2025",
      role: "Student Developer",
      company: "Academic Projects",
      description:
        "Created several web applications as part of coursework to practice programming and system development.",
    },
    {
      date: "Present",
      role: "IT Intern",
      company: "Internship Program",
      description:
        "Gaining practical experience in web development and assisting with development tasks.",
    },
  ]
  return (
    <section id="experience" className="border-t border-[#C4B9A8] py-12">
      <FadeIn>
        <div className="mb-8 border-b border-[#C4B9A8] pb-2">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            CAREER
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
