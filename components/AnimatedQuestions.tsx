"use client";
import { useEffect, useState } from "react";

const questions = [
  "What should I cook?",
  "How do I use my leftovers?",
  "What goes well with salmon?",
  "What can I make in 15 minutes?",
  "What's for dinner tonight?",
];

export function AnimatedQuestions() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % questions.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden inline-block h-[1lh] align-baseline">
      <div
        className="transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: `translateY(-${index * 1}lh)`,
        }}
      >
        {questions.map((q, i) => (
          <div key={i} className="leading-[1lh]">
            <span className="text-hands-green font-medium">{q}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
