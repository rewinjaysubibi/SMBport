"use client"
import React from "react"
import { FadeIn } from "./FadeIn"

export function Hero() {
  return (
    <section id="top" className="py-16 text-center md:py-20">
      <FadeIn>
        <div className="mb-6 border-t border-[#C4B9A8] pt-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            THE PORTFOLIO OF
          </span>
        </div>

        <h1 className="font-georgia mb-6 text-5xl font-normal tracking-wide text-[#1A1A1A] uppercase md:text-7xl lg:text-8xl">
          REWIN JAY SUBIBI
        </h1>

        <div className="mb-6 border-b border-[#C4B9A8] pb-6">
          <p className="font-georgia mx-auto max-w-2xl text-xl text-[#1A1A1A] italic md:text-2xl">
            An IT intern and aspiring developer with experience in Next.js,
            JavaScript, HTML, and CSS. I enjoy building clean, user-friendly
            web applications and solving problems through code.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 text-[11px] tracking-[0.2em] text-[#1A1A1A] uppercase">
          <span>General Santos City</span>
          <span>·</span>
          <span>Est. 2026</span>
          <span>·</span>
          <span>SMB. No. 1</span>
        </div>
      </FadeIn>
    </section>
  )
}
