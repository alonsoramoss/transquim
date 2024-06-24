import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        "animation": {
          "border-width": "border-width 3s infinite alternate"
        },
        "keyframes": {
          "border-width": {
            "from": {
              "width": "10px",
              "opacity": "0"
            },
            "to": {
              "width": "200px",
              "opacity": "1"
            }
          }
      }
    },
  },
  plugins: [],
}
export default config
