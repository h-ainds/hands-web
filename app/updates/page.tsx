"use client"
import * as React from "react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { updates } from "./[slug]/data"

interface ContentBlock {
  type: "paragraph" | "heading"
  text: string
}

interface Update {
  slug: string
  title: string
  date: string
  content: ContentBlock[]
}

export default function UpdatesPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-5 py-14">
        <h1 className="text-6xl font-bold text-center mb-12 font-['Halyard_Display']">
          Updates
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update: Update) => {
            const formattedDate = new Date(update.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            return (
              <Link
                key={update.slug}
                href={`/updates/${update.slug}`}
                className="block p-6 border border-black/10 rounded-lg hover:border-black/30 transition-colors"
              >
                <time className="text-sm text-black/60 font-['Halyard_Display']">
                  {formattedDate}
                </time>
                <h2 className="text-2xl font-semibold mt-2 font-['Halyard_Display']">
                  {update.title}
                </h2>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}