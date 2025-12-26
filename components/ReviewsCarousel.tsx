"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    id: 1,
    text: "\“This completely changed how I plan meals.\”",
  },
  {
    id: 2,
    text: "\“So simple it actually sticks.\”",
  },
  {
    id: 3,
    text: "\“Finally, something that doesn't feel overwhelming.\”",
  },
]

export default function ReviewsCarousel() {
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

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) next()
    if (info.offset.x > 60) prev()
  }

  return (
    <div className="relative rounded-[36px] flex flex-col items-center justify-center overflow-hidden">
      {/* TEXT ONLY */}
      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.p
            key={reviews[index].id}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 32 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-lg font-halyard font-normal text-hands-iron leading-tight max-w-md cursor-grab active:cursor-grabbing"
          >
            {reviews[index].text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Static AVATAR */}
      <div className="mb-2 mt-6">
        <img
          src="Images/belinda-avatar.jpg"
          alt="User Avatar"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  )
}