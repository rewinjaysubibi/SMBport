"use client"
import React from "react"
import { FadeIn } from "./FadeIn"
export function About() {
  return (
    <section id="about" className="pb-12 md:pb-0">
      <FadeIn>
        <div className="mb-6 border-b border-[#C4B9A8] pb-2">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            ABOUT
          </h2>
        </div>
        <p className="font-georgia text-justify text-base leading-relaxed text-[#1A1A1A] md:text-lg">
          I am an aspiring software engineer and IT intern specializing in
          building web applications with Next.js. I focus on clean code,
          thoughtful design, and creating responsive, mobile-friendly
          interfaces. Currently gaining practical experience through internship
          projects in frontend development and modern web workflows.
        </p>
      </FadeIn>
    </section>
  )
}
