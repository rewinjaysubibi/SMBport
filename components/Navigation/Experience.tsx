import React from "react"
import { FadeIn } from "../FadeIn"
export function Experience() {
  const experiences = [
    {
      date: "2026 — Present",
      role: "IT Intern",
      company: "",
      description:
        "Assisting the IT team with software development tasks, testing, and troubleshooting. Learning best practices for deployment and system maintenance.",
    },
    {
      date: "2025 — 2026",
      role: "Student Intern",
      company: "",
      description:
        "Worked on small projects involving web development, database management, and debugging. Gained practical experience in collaborative coding environments.",
    },
    {
      date: "2025 — 2026",
      role: "Junior Developer Trainee",
      company: "",
      description:
        "Built simple web applications using HTML, CSS, JavaScript, and React. Learned version control with Git and basic deployment strategies.",
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
