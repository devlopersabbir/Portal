import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0072DE',
        black: '#041B29',
      },
      letterSpacing: {
        negative: '-1.48px',
      },
      fontFamily: {
        plusJakartaSans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        prompt: ['var(--font-prompt)', 'sans-serif'],
      },
    },
  },
  // variants: {
  //   extend: {
  //     border: ['body-scrolled'],
  //     padding: ['body-scrolled'],
  //   },
  // },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('body-scrolled', 'body.body-scrolled &');
    }),
  ],
};

export default config;
