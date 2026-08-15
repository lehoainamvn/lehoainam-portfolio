/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        accent: {
          DEFAULT: '#38bdf8', // Muted Cyan/Sky blue for engineering feel
          hover: '#0284c7',
          subtle: 'rgba(56, 189, 248, 0.08)',
          border: 'rgba(56, 189, 248, 0.25)',
        },
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          800: '#18181b',
          900: '#121215',
          950: '#09090b',
        }
      }
    },
  },
  plugins: [],
}
