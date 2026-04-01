import React from "react"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-[#C4B9A8] bg-[#C4B9A8] py-6 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-2 px-4 text-center sm:px-6">
        <p className="text-xs leading-relaxed tracking-widest text-[#6B5B4E] uppercase">
          © REWIN JAY SUBIBI · ALL RIGHTS RESERVED
        </p>
        <p className="font-georgia text-sm leading-relaxed text-[#6B5B4E] italic">
          Printed in General Santos City, Philippines.
        </p>
        <p className="font-georgia text-sm leading-relaxed text-[#6B5B4E] italic">
          Designed and built by Rewin Jay Subibi.
        </p>
      </div>
    </footer>
  )
}
