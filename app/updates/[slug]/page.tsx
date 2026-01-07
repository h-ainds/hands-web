"use client"

import * as React from "react"
import { notFound, useRouter } from "next/navigation"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { updates } from "../data"

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const router = useRouter()

  const article = updates?.find((a) => a.slug === slug)

  if (!article) notFound()

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="bg-white text-black min-h-screen">
      <Navigation />

      <article className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 md:col-start-4">

          {/* Back button */}
          <button
            onClick={() => router.push("/updates")}
            className="mb-6 text-sm text-black/60 hover:text-black transition font-halyard"
          >
          Back
          </button>

          <time
            className="block text-center text-lg text-black/60 mb-6 font-['Halyard_Display']"
            dateTime={article.date}
          >
            {formattedDate}
          </time>

          <h1 className="text-6xl font-bold text-left mb-12 font-['Halyard_Display']">
            {article.title}
          </h1>

          <div className="space-y-8">
            {article.content.map((block, i) =>
              block.type === "heading" ? (
                <h2 key={i} className="text-4xl font-semibold mt-12 mb-6 font-['Halyard_Display']">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-xl leading-normal text-black/80 font-['Halyard_Display']">
                  {block.text}
                </p>
              )
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}