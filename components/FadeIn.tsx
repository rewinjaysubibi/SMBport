"use client"
import React, { ReactNode } from "react"
import { motion } from "framer-motion"
interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
