import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A3728',
          foreground: '#FFFFFF',
        },
        background: '#F5F0E6',
        accent: {
          DEFAULT: '#8B7355',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#333333',
          foreground: '#666666',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000',
        },
        border: '#8B7355',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        '3xl': '3rem',
        '2xl': '2rem',
        xl: '1.5rem',
        lg: '1.25rem',
        base: '1rem',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
      },
      maxWidth: {
        content: '800px',
        site: '1200px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
};

export default config;
