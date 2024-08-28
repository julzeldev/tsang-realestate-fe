import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: {
          primary: '#0891b2', // cyan-600
          primaryLight: '#06b6d4', // cyan-500
          secondary: '#7c3aed', // violet-600
          secondaryLight: '#8b5cf6', // violet-500
          border: '#d1d5db', // gray-300
          text: {
            primary: '#111827', // gray-900
            secondary: '#4b5563', // gray-600
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
