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
          I am a software engineer with 6+ years of experience building web
          applications and distributed systems. I care deeply about clean code,
          thoughtful design, and shipping products that make a difference.
          Currently based in , working on developer tools. Previously at Stripe
          and a YC startup.
        </p>
      </FadeIn>
    </section>
  )
}
