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
          I am a BS Information Technology intern with a growing interest in web
          development. I have experience building simple web applications using
          HTML, CSS, PHP and JavaScript, and I enjoy learning new technologies
          to improve my development skills. I am currently gaining hands-on
          experience through academic projects and practical training.
        </p>
      </FadeIn>
    </section>
  )
}
