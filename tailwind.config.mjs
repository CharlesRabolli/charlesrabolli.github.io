/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          light: '#E3F2FD',
          DEFAULT: '#2196F3',
          dark: '#1565C0'
        },
        secondary: {
          light: '#F3E5F5',
          DEFAULT: '#9C27B0',
          dark: '#6A1B9A'
        },
        medical: {
          light: '#E1F5FE',
          DEFAULT: '#03A9F4',
          dark: '#0277BD'
        },
        engineering: {
          light: '#FBE9E7',
          DEFAULT: '#FF5722',
          dark: '#D84315'
        },
        research: {
          light: '#E8F5E9',
          DEFAULT: '#4CAF50',
          dark: '#2E7D32'
        },
        background: {
          light: '#FAFAFA',
          DEFAULT: '#F5F5F5',
          dark: '#EEEEEE'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}