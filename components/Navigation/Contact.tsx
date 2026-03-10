"use client"
import React, { useState, useRef } from "react"
import { FadeIn } from "../FadeIn"

type ApiResponse = {
  success: boolean
  error?: string
}

export function Contact() {
  const [status, setStatus] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result: ApiResponse = await res.json()

      if (result.success) {
        setStatus("✅ Message sent successfully! Check your inbox.")
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        setStatus(
          `❌ Failed to send message: ${result.error || "Unknown error"}`
        )
      }
    } catch (err) {
      console.error("Fetch error:", err)
      setStatus(
        `❌ Error: ${err instanceof Error ? err.message : "Failed to send"}`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <FadeIn>
        <div className="border border-[#C4B9A8] p-1">
          <div className="border border-[#C4B9A8] p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
                CORRESPONDENCE
              </h2>
              <div className="mb-4 space-x-2 text-[11px] tracking-[0.1em] text-[#1A1A1A] uppercase">
                <span>Electronic Mail: subibirewinjay@gmail.com</span>
                <span>·</span>
                <a href="#" className="transition-colors hover:text-[#1B2A4A]">
                  LinkedIn
                </a>
                <span>·</span>
                <a href="#" className="transition-colors hover:text-[#1B2A4A]">
                  GitHub
                </a>
              </div>
              <p className="text-[10px] text-[#666] italic">
                Messages sent via this form will be delivered to your Gmail
                inbox
              </p>
            </div>

            <form
              ref={formRef}
              className="mx-auto max-w-xl space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="font-georgia w-full rounded-none border-b border-[#C4B9A8] bg-transparent py-2 text-[#1A1A1A] transition-colors focus:border-[#1B2A4A] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="font-georgia w-full rounded-none border-b border-[#C4B9A8] bg-transparent py-2 text-[#1A1A1A] transition-colors focus:border-[#1B2A4A] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="font-georgia w-full resize-none rounded-none border-b border-[#C4B9A8] bg-transparent py-2 text-[#1A1A1A] transition-colors focus:border-[#1B2A4A] focus:outline-none"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-block px-8 py-3 text-[11px] tracking-[0.2em] text-[#F5F0E8] uppercase transition-colors ${
                    loading
                      ? "cursor-not-allowed bg-gray-500"
                      : "bg-[#1B2A4A] hover:bg-[#1A1A1A]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {status && <p className="mt-2 text-center text-sm">{status}</p>}
            </form>

            <div className="mt-8 text-center">
              <p className="font-georgia text-sm text-[#1A1A1A] italic">
                All correspondence will receive a prompt reply.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
