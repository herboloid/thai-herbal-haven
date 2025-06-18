
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
				coral: {
					50: '#fef5f2',
					100: '#fde8e2',
					200: '#fad5ca',
					300: '#f6b8a4',
					400: '#f09277',
					500: '#e67951',
					600: '#d25635',
					700: '#be5024',
					800: '#9d4420',
					900: '#823d20',
				},
				sage: {
					50: '#f4f5f2',
					100: '#e8ebe2',
					200: '#d1d7c7',
					300: '#b3bda2',
					400: '#929f7a',
					500: '#788c3a',
					600: '#697a35',
					700: '#56642c',
					800: '#475126',
					900: '#3c4422',
				},
				honey: {
					50: '#fefbf0',
					100: '#fdf5dc',
					200: '#fae9b8',
					300: '#f6d88a',
					400: '#f0c15a',
					500: '#e8a53d',
					600: '#d58927',
					700: '#b26a22',
					800: '#905323',
					900: '#764521',
				},
				peach: {
					50: '#fef9f6',
					100: '#fdf1ea',
					200: '#fae1d1',
					300: '#f5cab0',
					400: '#edaa87',
					500: '#dba180',
					600: '#c47a5f',
					700: '#a4614b',
					800: '#855041',
					900: '#6e4439',
				},
				lavender: {
					50: '#f6f5f8',
					100: '#eeedf2',
					200: '#dfdde6',
					300: '#c8c3d3',
					400: '#aba1bb',
					500: '#a284c7',
					600: '#8a69a0',
					700: '#735582',
					800: '#60486b',
					900: '#503d59',
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
