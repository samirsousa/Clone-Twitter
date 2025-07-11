module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./Sidebar/**/*.{js,jsx,ts,tsx}",
    "./TwitterForm/**/*.{js,jsx,ts,tsx}",
    "./Tweet/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
        'twitter-black': '#14171A',
        'twitter-dark-gray': '#657786',
        'twitter-light-gray': '#aab8c2',
        'twitter-extra-light-gray': '#e1e8ed',
        'twitter-background': '#15202b',
      },
    },
  },
  plugins: [],
}

