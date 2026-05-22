module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)'
      },
      fontFamily: {
        display: ['Clash Display', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
