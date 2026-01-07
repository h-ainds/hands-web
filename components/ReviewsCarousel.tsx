"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  { id: 1, text: "“Cool! Love the design.”" },
  { id: 2, text: "“Been waiting on this for years.”" },
  { id: 3, text: "“I'm using this everyday now.”" },
]

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const startX = useRef<number | null>(null)

  const next = () =>
    setIndex((prev) => (prev + 1) % reviews.length)

  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return
    setOffsetX(e.clientX - startX.current)
  }

  const handlePointerUp = () => {
    if (offsetX < -60) next()
    if (offsetX > 60) prev()

    setOffsetX(0)
    startX.current = null
  }

  return (
<div className="relative w-full flex items-center justify-center">

{/* LEFT CHEVRON */}
<button
  aria-label="Previous review"
  onClick={prev}
  className="absolute left-4 sm:left-4 top-1/2 -translate-y-1/2 z-10
             h-9 w-9 rounded-full bg-white/80
             flex items-center justify-center"
>
  <ChevronLeft className="h-4 w-4" />
</button>

{/* RIGHT CHEVRON */}
<button
  aria-label="Next review"
  onClick={next}
  className="absolute right-4 top-1/2 -translate-y-1/2 z-10
             h-9 w-9 rounded-full bg-white/80
             flex items-center justify-center">
  <ChevronRight className="h-4 w-4" />
</button>

{/* CALCIUM CARD (STATIC) */}
<div className="overflow-hidden flex flex-col items-center justify-center">
  {/* content unchanged */}
        
        {/* TEXT */}
        <div className="flex-1 flex items-center justify-center px-6 text-center">
          <p
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{
              transform: `translateX(${offsetX}px)`,
              transition: startX.current ? "none" : "transform 0.25s ease-out",
            }}
            className="text-lg sm:text-xl font-halyard font-normal text-black
                       leading-tight max-w-md cursor-grab active:cursor-grabbing
                       select-none"
          >
            {reviews[index].text}
          </p>
        </div>

        {/* AVATAR */}
        <div className="mb-2 mt-6 flex items-center pointer-events-none">
          <img
            src="Images/shaan-avatar.jpg"
            alt="User Avatar 1"
            className="w-9 h-9 rounded-full object-cover border-2 border-[#F7F7F7] z-30"
          />
          <img
            src="Images/belinda-avatar.jpg"
            alt="User Avatar 2"
            className="-ml-3 w-9 h-9 rounded-full object-cover border-2 border-[#F7F7F7] z-20"
          />
          <img
            src="Images/julius-avatar.jpg"
            alt="User Avatar 3"
            className="-ml-3 w-9 h-9 rounded-full object-cover border-2 border-[#F7F7F7] z-10"
          />
        </div>

        {/* DOTS */}
        <div className="mb-1 flex gap-1.5 pointer-events-none">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === index ? "bg-hands-iron" : "bg-hands-iron/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}