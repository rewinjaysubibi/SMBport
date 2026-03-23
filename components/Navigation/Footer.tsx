import React from "react"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-[#C4B9A8] bg-[#C4B9A8] py-6 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[10px] leading-relaxed tracking-widest text-[#6B5B4E] uppercase sm:text-xs">
          © REWIN JAY SUBIBI · ALL RIGHTS RESERVED
        </p>

        <p className="font-georgia text-[11px] leading-relaxed text-[#6B5B4E] italic sm:text-sm">
          Printed in General Santos City, Philippines.
        </p>

        <p className="font-georgia text-[11px] leading-relaxed text-[#6B5B4E] italic sm:text-sm">
          Designed and built by Rewin Jay Subibi.
        </p>
      </div>
    </footer>
  )
}
