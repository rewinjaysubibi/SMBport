"use client"
import React from "react"
import { FadeIn } from "./FadeIn"
export function Projects() {
  const projects = [
    {
      title: "A group Project for Sia2 Massage Booking",
      description:
        "Real-time booking management and analytics dashboard for a massage service. Designed to track appointments, manage schedules, and provide insights with fast, responsive performance.",
      tech: "PHP, Laravel, MySQL, HTML, CSS, JavaScript",
      github:
        "https://github.com/CAACARL/Sia2-Massage-Booking/tree/main/laravel",
      live: "#",
    },
    {
      title: "mpo group project for mpo office of Rmmc",
      description:
        "A calendar-based scheduling system for managing appointments and events. Implements real-time updates for seamless booking and coordination among staff.",
      tech: "Built with PHP, Laravel, Boostrap, Javascrpt",
      github: "https://github.com/harvey4u/mpo1",
      live: "#",
    },
    {
      title: "Aura UI",
      description:
        "Minimalist, accessible component library for React applications. Focuses on unstyled, composable primitives that can be easily customized.",
      tech: "Built with React, Tailwind CSS, Radix UI,",
      github: "#",
      live: "#",
    },
    {
      title: "Orbit CLI",
      description:
        "Command-line tool for managing multi-cloud deployments. Streamlines the process of provisioning and updating infrastructure across providers.",
      tech: "Gitlab, and GitHub Actions",
      github: "https://gitlab.com/",
      live: "",
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
