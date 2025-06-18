
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
			fontFamily: {
				'sans': ['Inter', 'Noto Sans Thai', 'system-ui', 'sans-serif'],
				'thai': ['Noto Sans Thai', 'Inter', 'system-ui', 'sans-serif'],
			},
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
				terracotta: {
					50: '#fdf7f5',
					100: '#fbeee8',
					200: '#f5d5c7',
					300: '#efb8a0',
					400: '#e89673',
					500: '#d87650',
					600: '#c65d3a',
					700: '#a84e31',
					800: '#8a432d',
					900: '#713a28',
				},
				olive: {
					50: '#f8f8f6',
					100: '#eeefe9',
					200: '#dcdfd2',
					300: '#c4cab2',
					400: '#a8b18b',
					500: '#8d9568',
					600: '#6f7951',
					700: '#5a6042',
					800: '#4a4f38',
					900: '#3f4331',
				},
				peach: {
					50: '#fef9f6',
					100: '#fdf1ea',
					200: '#fadfcf',
					300: '#f5c5a8',
					400: '#eba575',
					500: '#e1884a',
					600: '#d47033',
					700: '#b05a28',
					800: '#8d4925',
					900: '#723e22',
				},
				lavender: {
					50: '#f8f7fb',
					100: '#f1eff6',
					200: '#e4e1ed',
					300: '#d0cade',
					400: '#b6abcb',
					500: '#9b8bb7',
					600: '#8171a5',
					700: '#6d5d92',
					800: '#5b4f7a',
					900: '#4c4264',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
