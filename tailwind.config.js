/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.12 0.08 240)',
        foreground: 'oklch(0.98 0 0)',
        card: 'oklch(0.18 0.12 240)',
        'card-foreground': 'oklch(0.92 0 0)',
        popover: 'oklch(0.18 0.12 240)',
        'popover-foreground': 'oklch(0.92 0 0)',
        primary: 'oklch(0.45 0.25 240)',
        'primary-foreground': 'oklch(0.98 0 0)',
        secondary: 'oklch(0.25 0.15 240)',
        'secondary-foreground': 'oklch(0.92 0 0)',
        muted: 'oklch(0.22 0.1 240)',
        'muted-foreground': 'oklch(0.7 0.05 240)',
        accent: 'oklch(0.78 0.18 195)',
        'accent-foreground': 'oklch(0.15 0 0)',
        destructive: 'oklch(0.65 0.2 25)',
        'destructive-foreground': 'oklch(0.98 0 0)',
        border: 'oklch(0.3 0.15 240)',
        input: 'oklch(0.25 0.12 240)',
        ring: 'oklch(0.78 0.18 195)'
      },
      borderRadius: {
        'lg': '0.75rem',
        'md': '0.75rem',
        'sm': '0.375rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(90deg)' },
          '50%': { transform: 'translateY(-10px) rotate(180deg)' },
          '75%': { transform: 'translateY(-30px) rotate(270deg)' }
        },
        shimmer: {
          '0%, 100%': { 
            background: 'linear-gradient(135deg, oklch(0.78 0.18 195), oklch(0.65 0.15 200), oklch(0.85 0.15 270))'
          },
          '50%': { 
            background: 'linear-gradient(135deg, oklch(0.85 0.15 270), oklch(0.78 0.18 195), oklch(0.65 0.15 200))'
          }
        }
      }
    },
  },
  plugins: [],
}
