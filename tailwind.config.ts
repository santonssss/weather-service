import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        rain: {
          "0%": {
            transform: "translateY(-100vh)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        snow: {
          "0%": {
            transform: "translateY(-10vh) translateX(0)",
          },
          "50%": {
            transform: "translateY(50vh) translateX(20px)",
          },
          "100%": {
            transform: "translateY(100vh) translateX(0)",
          },
        },
        "clouds-move": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "leaf-fall": {
          "0%": {
            transform: "translateY(-10vh) rotate(0deg) translateX(0)",
          },
          "25%": {
            transform: "translateY(25vh) rotate(90deg) translateX(20px)",
          },
          "50%": {
            transform: "translateY(50vh) rotate(180deg) translateX(-20px)",
          },
          "75%": {
            transform: "translateY(75vh) rotate(270deg) translateX(10px)",
          },
          "100%": {
            transform: "translateY(100vh) rotate(360deg) translateX(0)",
          },
        },
        "petal-fall": {
          "0%": {
            transform: "translateY(-10vh) rotate(0deg) translateX(0)",
          },
          "33%": {
            transform: "translateY(30vh) rotate(120deg) translateX(30px)",
          },
          "66%": {
            transform: "translateY(60vh) rotate(240deg) translateX(-30px)",
          },
          "100%": {
            transform: "translateY(100vh) rotate(360deg) translateX(0)",
          },
        },
        "spring-rain": {
          "0%": {
            transform: "translateY(-10vh)",
            opacity: "0.5",
          },
          "90%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(100vh)",
            opacity: "0",
          },
        },
        "winter-snow": {
          "0%": {
            transform: "translateY(-10vh) translateX(0)",
          },
          "50%": {
            transform: "translateY(50vh) translateX(20px)",
          },
          "100%": {
            transform: "translateY(100vh) translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        rain: "rain 0.7s linear infinite",
        snow: "snow 10s linear infinite",
        "clouds-move": "clouds-move 30s linear infinite",
        "leaf-fall": "leaf-fall 15s linear infinite",
        "petal-fall": "petal-fall 12s linear infinite",
        "spring-rain": "spring-rain 1.5s linear infinite",
        "winter-snow": "winter-snow 15s linear infinite",
      },
      backgroundImage: {
        sunny:
          "url('https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1920')",
        cloudy:
          "url('https://images.unsplash.com/photo-1499956827185-0d63ee78a910?q=80&w=1920')",
        rainy:
          "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1920')",
        snowy:
          "url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1920')",
        night:
          "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1920')",
        stormy:
          "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1920')",
        winter:
          "url('https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=1920')",
        spring:
          "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1920')",
        summer:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920')",
        autumn:
          "url('https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=1920')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
