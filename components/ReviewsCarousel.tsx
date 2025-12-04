"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  { id: 1, img: "Images/rev1.png" },
  { id: 2, img: "/reviews/rev2.jpg" },
  { id: 3, img: "/reviews/rev3.jpg" },
  { id: 4, img: "/reviews/rev4.jpg" },
  { id: 5, img: "/reviews/rev5.jpg" },
  { id: 6, img: "/reviews/rev6.jpg" },
  { id: 7, img: "/reviews/rev7.jpg" },
  { id: 8, img: "/reviews/rev8.jpg" },
  { id: 9, img: "/reviews/rev9.jpg" },
  { id: 10, img: "/reviews/rev10.jpg" },
]

function ReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleDragEnd = (_e: any, info: { offset: { x: number } }) => {
    const offsetX = info.offset.x

    if (offsetX < -60) next()
    else if (offsetX > 60) prev()
  }

  return (
    <div className="w-full h-full relative overflow-hidden rounded-[36px]">

      {/* --- DESKTOP ARROWS --- */}
      <button
        onClick={prev}
        className="
          hidden sm:flex
          absolute left-4 top-1/2 -translate-y-1/2 z-10 
          bg-white/70 backdrop-blur-md border border-black/10 
          rounded-full p-2 shadow-lg hover:bg-white transition
        "
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>

      <button
        onClick={next}
        className="
          hidden sm:flex
          absolute right-4 top-1/2 -translate-y-1/2 z-10 
          bg-white/70 backdrop-blur-md border border-black/10 
          rounded-full p-2 shadow-lg hover:bg-white transition
        "
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>

      {/* --- MAIN IMAGE / DRAG --- */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={reviews[index].id}
          src={reviews[index].img}
          alt="Review"
          className="w-full h-full object-contain"
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* --- INDICATORS --- */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1)
              setIndex(i)
            }}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-black/50 scale-125" : "bg-black/20"
            }`}
          />
        ))}
      </div>

    </div>
  )
}

export default ReviewsCarousel