import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        // Bugema Brand Colors
        bugema: {
          blue: "#1e40af",
          gold: "#f59e0b",
          green: "#059669",
          light: "#f8fafc",
          dark: "#0f172a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-20px) rotate(1deg)" },
          "50%": { transform: "translateY(-10px) rotate(-1deg)" },
          "75%": { transform: "translateY(-15px) rotate(0.5deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "0.8" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
        glow: "glow 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
      perspective: {
        "1000": "1000px",
        "2000": "2000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ({ addUtilities }) => {
      const newUtilities = {
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-2000": {
          perspective: "2000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".transform-gpu": {
          transform: "translateZ(0)",
          willChange: "transform",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".hover-lift": {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config

export default config
