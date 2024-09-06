// https://tailwindcss.com/docs/customizing-colors #colors
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
          primary: '#0284c7', // sky-600
          primaryLight: '#0ea5e9', // sky-500
          secondary: '#7c3aed', // violet-600
          secondaryLight: '#8b5cf6', // violet-500
          error: '#dc2626', // red-600
          errorLight: '#ef4444', // red-500
          success: '#059669', // emerald-600
          successLight: '#10b981', // emerald-500
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
