'use client'
import { useState } from "react"
import Link from "next/link"
import { Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggle = () => setMenuOpen(!menuOpen)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="sticky top-0 z-20 w-full h-16 bg-white flex items-center">
      <div className="container mx-auto px-6 h-full grid grid-cols-3 items-center">
        {/* Column 1: Logo */}
        <div className="col-span-1">
          <Link
            href="/"
            className="text-xl sm:text-lg text-black hover:text-gray-600 transition-colors font-halyard font-medium"
          >
            Hands
          </Link>
        </div>

        {/* Column 2: Nav links (hidden on small screens) */}
        <div className="col-span-1 justify-center hidden sm:flex space-x-6">
          <Link
            href="/"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            About
          </Link>
          <Link
            href="/mission"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            Mission
          </Link>
          <a
            href="mailto:handsforai@gmail.com"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            Careers
          </a>
          <Link
            href="/updates"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            Updates
          </Link>
        </div>

        {/* Column 3: Sign Up + Mobile Menu Toggle */}
        <div className="col-span-1 flex justify-end items-center gap-4">
          <Link
            href="/try-hands-sign-up"
            className="bg-[#6CD402] text-white text-xl sm:text-lg font-halyard font-medium px-4 pt-1 pb-1.5 sm:py-1 rounded-full"
          >
            Sign up
          </Link>

          {/* Mobile toggle button (hidden on larger screens) */}
          <button
            onClick={handleToggle}
            className="sm:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Plus size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay - accordion style */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-white sm:hidden z-10 overflow-hidden"
          >
            <div className="flex flex-col pl-[28px] pt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="text-2xl text-black hover:text-gray-600 font-halyard font-book block"
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <Link
                  href="/mission"
                  onClick={handleLinkClick}
                  className="text-2xl text-black hover:text-gray-600 font-halyard font-book block"
                >
                  Mission
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <a
                  href="mailto:handsforai@gmail.com"
                  onClick={handleLinkClick}
                  className="text-2xl text-black hover:text-gray-600 font-halyard font-book block"
                >
                  Careers
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <Link
                  href="/updates"
                  onClick={handleLinkClick}
                  className="text-2xl text-black hover:text-gray-600 font-halyard font-book block"
                >
                  Updates
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation