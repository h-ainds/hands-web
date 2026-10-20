// app/updates/data.ts
export type Article = {
    slug: string
    title: string
    date: string
    excerpt: string
    content: { type: "paragraph" | "heading"; text: string }[]
    
  }
  
  export const updates: Article[] = [
    {
      slug: "announcing-hands",
      title: "Announcing Hands",
      date: "2025-10-26",
      excerpt:
        "Today, we're announcing Hands, your intelligent, personal cooking assistant.",
      content: [
        {
          type: "paragraph",
          text: "Today, we’re excited to announce Hands, an AI web app that helps you decide what to cook by suggesting relevant recipes.",
        },
        {
          type: "paragraph",
          text: "Hands is designed to get to know you by learning from your favorite cuisines, meals, and ingredients, providing you with recipes based on what you already have at home, and even planning your weekly meals.",
        },
        {
          type: "paragraph",
          text: "What makes Hands special is its true context. By saving relevant context, it remembers and learns what your preferences are. Using the latest machine learning technologies, it delivers accurate, intuitive recommendations — so every time you cook or plan a meal, it feels like having an extra pair of Hands.",
        },
        
        {
          type: "heading",
          text: "Why we are building Hands",
        },
        {
          type: "paragraph",
          text: "At Hands, we want to create the first intelligent, personal cooking assistant. By creating and improving our app, we aim to:",
        },
        {
          type: "paragraph",
          text: "• Gain a deeper understanding of food preferences. The choices we make each day reflect more than habits; they're shaped by personality, mood, genetics, and more personal factors.",
        },
        {
          type: "paragraph",
          text: "• Develop AI models that intuitively understand human taste. We're driven to solve one of AI's hardest problems: accuracy and context-awareness, so that Hands can be more like a personal chef to you",
        },
        
       {
          type: "paragraph",
          text: "Ultimately, we envision that we can make personalized health more accessible for everyone, helping people reach their potential and lead richer, more nourished lives.",
        },
        {
          type: "heading",
          text: "Engineering at Hands",
        },
        {
          type: "paragraph",
          text: "Our engineering team is focused on deep learning, contextual understanding, and sensory modeling. With RAG, we’re building a foundation for long-term memory to help us develop future AI systems that don’t just process data, but understand personality, memory, and habits.",
        },
        {
          type: "paragraph",
          text: "If that excites you, we’d love to hear from you.",
        },
        {
          type: "heading",
          text: "Early Access",
        },
        {
          type: "paragraph",
          text: "We’ll be releasing the first beta to a limited number of people in the U.S., Canada, and Germany to provide us with valuable feedback to improve our app before we launch publicly.",
        },
        {
          type: "heading",
          text: "Looking ahead",
        },
        {
          type: "paragraph",
          text: "Hands isn’t a fitness or diet app — and we’re not trying to be; we don’t offer any nutritional or medical advice. Instead, we believe that people succeed when their health goals fit naturally into their everyday lives. That’s why our approach starts with understanding you before we ever recommend anything.",
        },
        {
          type: "paragraph",
          text: "And we’re more than excited to guide that path forward with Hands, the first intelligent, personal cooking assistant.",
        },
      ],
    },
    {
      slug: "update",
      title: "Update",
      date: "2026-01-25",
      excerpt:
        "We're excited to share that we'll be releasing Hands on iOS.",
      content: [
        {
          type: "paragraph",
          text: "We're excited to share that we'll be releasing Hands on iOS.",
        },
        {
          type: "paragraph",
          text: "In the last few months, we've spent a lot of time building, tinkering, and experimenting on our app. And after countless tests, we have felt confident enough that it's worth sharing it with the world.",
        },
        {
          type: "heading",
          text: "What’s Next",
        },
        {
          type: "paragraph",
          text: "The most requested feature by far is image upload. We'll be working super hard to make that part of the app before the end of March. Until then, recipe suggestions will be provided based on text input.",
        },
        {
          type: "paragraph",
          text: "Speaking of multimodality, API costs will eventually accumulate and we'll introduce paid tiers. But if there's anything I can guarantee, it's that Hands will always have a free plan that's useful and sufficient for general use.",
        },
        {
          type: "heading",
          text: "TestFlight",
        },
        {
          type: "paragraph",
          text: "I expect that we'll stay in TestFlight for at least one to two months, and with the goal of actually getting a lot of feedback from our seed cohort of 100 or so people.",
        },
        {
          type: "paragraph",
          text: "If you don't hear anything from us for a bit, it's because we're talking to our community d building something that's loved and that has the potential to impact millions.",
        },
      ],
    },
  ]  