"use client"
import React from "react"
import { FadeIn } from "./FadeIn"
export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: "TypeScript, Python",
    },
    {
      name: "Frameworks",
      skills: "React, Node.js, Next.js",
    },
    {
      name: "Infrastructure",
      skills: "PostgreSQL, Redis, AWS, Docker",
    },
    {
      name: "Tools",
      skills: "GraphQL, Tailwind CSS, Git",
    },
  ]
  return (
    <section id="skills" className="pb-12 md:pb-0">
      <FadeIn>
        <div className="mb-6 border-b border-[#C4B9A8] pb-2">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            EXPERTISE
          </h2>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="mb-1 text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
                {category.name}
              </h3>
              <p className="font-georgia text-base text-[#1A1A1A] italic">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
