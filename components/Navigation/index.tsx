"use client"
import React, { useEffect, useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Expertise",
      href: "#skills",
    },
    {
      name: "Featured Work",
      href: "#projects",
    },
    {
      name: "Career",
      href: "#experience",
    },
    {
      name: "Correspondence",
      href: "#contact",
    },
  ]
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 bg-[#F5F0E8] transition-all duration-300 ${isScrolled ? "border-b border-[#C4B9A8] py-3" : "py-5"}`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase transition-colors hover:text-[#1B2A4A]"
        >
          My Portfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] tracking-[0.2em] text-[#1A1A1A] uppercase transition-colors hover:text-[#1B2A4A]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="text-[#1A1A1A] transition-colors hover:text-[#1B2A4A] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 border-b border-[#C4B9A8] bg-[#F5F0E8] px-6 py-4 shadow-sm md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 text-[11px] tracking-[0.2em] text-[#1A1A1A] uppercase transition-colors hover:text-[#1B2A4A]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
