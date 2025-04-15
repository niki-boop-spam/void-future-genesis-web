
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
				sans: ['Inter', 'sans-serif'],
				mono: ['Space Mono', 'monospace'],
				display: ['Orbitron', 'sans-serif'],
				alice: ['Alice', 'serif'],
				seasons: ['EB Garamond', 'serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Brand Colors
				brand: {
					primary: {
						light: '#8e97fd',
						dark: '#7c9a92'
					},
					secondary: {
						light: '#253334',
						dark: '#253334'
					},
					tertiary: {
						light: '#7c9a92',
						dark: '#7c9a92'
					},
					alternate: {
						light: '#e0e3e7',
						dark: '#262d34'
					}
				},

				// Accent Colors
				accent: {
					1: {
						light: '#4c4b39ef',
						dark: '#4c4b39ef'
					},
					2: {
						light: '#4d39d2c0',
						dark: '#4d39d2c0'
					},
					3: {
						light: '#4dee8b60',
						dark: '#4dee8b60'
					},
					4: {
						light: '#ccffffff',
						dark: '#b22e2a34'
					}
				},

				// Custom Colors
				custom: {
					1: {
						light: '#acacac',
						dark: '#acacac'
					},
					2: {
						light: '#bec2c2',
						dark: '#bec2c2'
					}
				},

				// Utility Colors
				utility: {
					text: {
						primary: {
							light: '#3f414e',
							dark: '#ffffff'
						},
						secondary: {
							light: '#a1a4b2',
							dark: '#b3ffffff'
						}
					},
					background: {
						primary: {
							light: '#f5f5f9',
							dark: '#253334'
						},
						secondary: {
							light: '#3f414e',
							dark: '#e6ffffff'
						}
					}
				},

				// Semantic Colors
				semantic: {
					success: {
						light: '#249689',
						dark: '#249689'
					},
					error: {
						light: '#ff5963',
						dark: '#ff5963'
					},
					warning: {
						light: '#f9cf58',
						dark: '#f9cf58'
					},
					info: {
						light: '#ffffff',
						dark: '#ffffff'
					}
				},

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
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(124, 154, 146, 0.3), 0 0 10px rgba(124, 154, 146, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(124, 154, 146, 0.6), 0 0 30px rgba(124, 154, 146, 0.4)'
					}
				},
				'spin-slow': {
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
