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
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'fade-out': {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(10px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.5'
  				}
  			},
  			rain: {
  				'0%': {
  					transform: 'translateY(-100vh)'
  				},
  				'100%': {
  					transform: 'translateY(100vh)'
  				}
  			},
  			snow: {
  				'0%': {
  					transform: 'translateY(-10vh) translateX(0)'
  				},
  				'50%': {
  					transform: 'translateY(50vh) translateX(20px)'
  				},
  				'100%': {
  					transform: 'translateY(100vh) translateX(0)'
  				}
  			},
  			'clouds-move': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			'leaf-fall': {
  				'0%': {
  					transform: 'translateY(-10vh) rotate(0deg) translateX(0)'
  				},
  				'25%': {
  					transform: 'translateY(25vh) rotate(90deg) translateX(20px)'
  				},
  				'50%': {
  					transform: 'translateY(50vh) rotate(180deg) translateX(-20px)'
  				},
  				'75%': {
  					transform: 'translateY(75vh) rotate(270deg) translateX(10px)'
  				},
  				'100%': {
  					transform: 'translateY(100vh) rotate(360deg) translateX(0)'
  				}
  			},
  			'petal-fall': {
  				'0%': {
  					transform: 'translateY(-10vh) rotate(0deg) translateX(0)'
  				},
  				'33%': {
  					transform: 'translateY(30vh) rotate(120deg) translateX(30px)'
  				},
  				'66%': {
  					transform: 'translateY(60vh) rotate(240deg) translateX(-30px)'
  				},
  				'100%': {
  					transform: 'translateY(100vh) rotate(360deg) translateX(0)'
  				}
  			},
  			'spring-rain': {
  				'0%': {
  					transform: 'translateY(-10vh)',
  					opacity: '0.5'
  				},
  				'90%': {
  					opacity: '0.5'
  				},
  				'100%': {
  					transform: 'translateY(100vh)',
  					opacity: '0'
  				}
  			},
  			'winter-snow': {
  				'0%': {
  					transform: 'translateY(-10vh) translateX(0)'
  				},
  				'50%': {
  					transform: 'translateY(50vh) translateX(20px)'
  				},
  				'100%': {
  					transform: 'translateY(100vh) translateX(0)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'fade-out': 'fade-out 0.5s ease-out',
  			'slide-up': 'slide-up 0.3s ease-out',
  			float: 'float 6s ease-in-out infinite',
  			pulse: 'pulse 3s ease-in-out infinite',
  			rain: 'rain 0.7s linear infinite',
  			snow: 'snow 10s linear infinite',
  			'clouds-move': 'clouds-move 30s linear infinite',
  			'leaf-fall': 'leaf-fall 15s linear infinite',
  			'petal-fall': 'petal-fall 12s linear infinite',
  			'spring-rain': 'spring-rain 1.5s linear infinite',
  			'winter-snow': 'winter-snow 15s linear infinite'
  		},
  		backgroundImage: {
  			sunny: 'linear-gradient(180deg, #72ccff 0%, #2d94fc 100%)',
  			cloudy: 'linear-gradient(180deg, #b3c8d6 0%, #84a9c1 100%)',
  			rainy: 'linear-gradient(180deg, #5c6c7d 0%, #37474f 100%)',
  			snowy: 'linear-gradient(180deg, #c2e8ff 0%, #769fbc 100%)',
  			night: 'linear-gradient(180deg, #1a237e 0%, #121420 100%)',
  			stormy: 'linear-gradient(180deg, #36454F 0%, #1a1a1a 100%)',
  			winter: 'linear-gradient(180deg, #e3f2fd 0%, #bbdefb 100%)',
  			spring: 'linear-gradient(180deg, #c8e6c9 0%, #81c784 100%)',
  			summer: 'linear-gradient(180deg, #64b5f6 0%, #1e88e5 100%)',
  			autumn: 'linear-gradient(180deg, #ffb74d 0%, #f57c00 100%)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
