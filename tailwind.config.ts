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
        // Deep blue palette (darker, more sophisticated)
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2d5a8a',
          dark: '#0f2744',
          foreground: '#FFFFFF',
        },
        // Rich background gradient base
        background: {
          DEFAULT: '#0a1628',
          light: '#0f2744',
          card: 'rgba(255, 255, 255, 0.03)',
        },
        // Accent colors for CTAs and highlights
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          glow: 'rgba(59, 130, 246, 0.5)',
          foreground: '#FFFFFF',
        },
        // Secondary accent (warm gold for trust/authority)
        gold: {
          DEFAULT: '#d4a853',
          light: '#e8c778',
          dark: '#b8923f',
        },
        // Text colors
        foreground: {
          DEFAULT: '#f8fafc',
          muted: '#94a3b8',
          subtle: '#64748b',
        },
        // Surface colors for glass effects
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        // Legacy support
        muted: {
          DEFAULT: '#94a3b8',
          foreground: '#64748b',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          foreground: '#f8fafc',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        charcoal: '#0f172a',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3.5rem', { lineHeight: '1.1' }],
        '4xl': ['2.5rem', { lineHeight: '1.15' }],
        '3xl': ['2rem', { lineHeight: '1.2' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
      maxWidth: {
        content: '800px',
        site: '1200px',
        wide: '1400px',
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      backdropBlur: {
        xs: '4px',
        glass: '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'morph': 'morph 15s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg)',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'rotate(180deg)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.02)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
