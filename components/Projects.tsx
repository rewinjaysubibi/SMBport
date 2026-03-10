"use client"
import React from "react"
import { FadeIn } from "./FadeIn"
export function Projects() {
  const projects = [
    {
      title: "Nexus Analytics",
      description:
        "Real-time event tracking and analytics dashboard for SaaS products. Designed to handle high-throughput data ingestion with sub-second query latency.",
      tech: "Built with React, TypeScript, ClickHouse, and Go",
      github: "#",
      live: "#",
    },
    {
      title: "Lumina Editor",
      description:
        "A block-based rich text editor with collaborative features. Implements operational transformation for real-time multiplayer editing capabilities.",
      tech: "Built with Next.js, ProseMirror, Yjs, and WebSockets",
      github: "#",
      live: "#",
    },
    {
      title: "Aura UI",
      description:
        "Minimalist, accessible component library for React applications. Focuses on unstyled, composable primitives that can be easily customized.",
      tech: "Built with React, Tailwind CSS, Radix UI, and Storybook",
      github: "#",
      live: "#",
    },
    {
      title: "Orbit CLI",
      description:
        "Command-line tool for managing multi-cloud deployments. Streamlines the process of provisioning and updating infrastructure across providers.",
      tech: "Built with Rust, AWS SDK, Docker, and GitHub Actions",
      github: "#",
      live: "#",
    },
  ]
  return (
    <section id="projects" className="py-20">
      <FadeIn>
        <div className="mb-12 border-t border-b border-[#C4B9A8] py-3 text-center">
          <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            FEATURED WORK
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-[#C4B9A8] pb-12 last:border-0 last:pb-0"
            >
              <h3 className="font-georgia mb-4 text-2xl font-bold text-[#1A1A1A] md:text-3xl">
                {project.title}
              </h3>
              <p className="mb-3 text-base leading-relaxed text-[#1A1A1A] md:text-lg">
                {project.description}
              </p>
              <p className="mb-6 text-sm text-[#1A1A1A] italic md:text-base">
                {project.tech}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={project.github}
                  className="font-georgia text-[#1B2A4A] italic transition-colors hover:text-[#1A1A1A]"
                >
                  View source &rarr;
                </a>
                <a
                  href={project.live}
                  className="font-georgia text-[#1B2A4A] italic transition-colors hover:text-[#1A1A1A]"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
