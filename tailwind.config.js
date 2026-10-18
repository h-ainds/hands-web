/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-gradient": "url('/Images/bg-gradient-hero.jpg')",
        "hero-large": "url('/Images/bg-hero-large.jpg')",
      },
      backgroundSize: {
        "hero-size": "100% 100%",
      },
      backgroundPosition: {
        "hero-position": "center",
      },
      screens: {
        xs: "440px",
      },
      fontFamily: {
        helvetica: [
          "Helvetica Neue Pro",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        halyard: ["Halyard Display", "sans-serif"],
      },
      fontWeight: {
        book: "300",
        normal: "400",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        xs: "13px",
        sm: "15px",
        base: "18px",
        lg: "22px",
        xl: "26px",
        "2xl": "31px",
        "3xl": "37px",
        "4xl": "45px",
        "5xl": "54px",
        "6xl": "64px",
        "7xl": "77px",
        "8xl": "93px",
      },

      // 🟩 Integrated Hands Palette
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#6CD401",
          default: "#6CD401",
          foreground: "hsl(var(--primary-foreground))",
          white: "#FFFFFF",
          100: "#CBEFA3",
          200: "#99E14E",
          400: "#61BF01",
          500: "#56AA01",
        },
        secondary: {
          DEFAULT: "#F7F7F7",
          default: "#F7F7F7",
          foreground: "hsl(var(--secondary-foreground))",
          200: "#DEDEDE",
          300: "#A1A1A1",
          400: "#636363",
          500: "#313131",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        gradient: {
          start: "#000000",
          end: "#FFFFFF",
        },

        // 🎨 Hands Brand Colors
        hands: {
          white: "#FFFFFF",
          black: "#000000",
          strawberry: "#FE303F",

          spring: {
            dark: "#6ED308", // Spring Green Dark
            light: "#A5E765", // Spring Green Light (gradient variant)
          },

          green: "#6CD401", // Primary (Log In, Save..)
          lime: "#98E14D",  // 70% variant of green
          honeydew: "#F0FBE5", // 10% variant of green

          // Greens (Primary)
          primary: {
            DEFAULT: "#6CD401",
            default: "#6CD401",
            white: "#FFFFFF",
            100: "#CBEFA3",
            200: "#99E14E",
            400: "#61BF01",
            500: "#56AA01",
          },

          // Greys (Secondary)
          secondary: {
            DEFAULT: "#F7F7F7",
            default: "#F7F7F7",
            200: "#DEDEDE",
            300: "#A1A1A1",
            400: "#636363",
            500: "#313131",
          },

          // Refreshed brand greys (compatibility aliases)
          calcium: "#F7F7F7",   // secondary-default: Input field / Secondary button
          silver: "#DEDEDE",    // secondary-200: Usage
          magnesium: "#A1A1A1", // secondary-300: Icons
          grey: "#A1A1A1",      // secondary-300: Secondary text / Placeholder
          iron: "#636363",      // secondary-400: Unselected nav text
          graphite: "#313131",  // secondary-500: Dark text
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};