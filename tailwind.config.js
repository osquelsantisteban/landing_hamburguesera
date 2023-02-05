module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily: {
        'inter': ['inter'],
        'coustard': ['coustard'],
      },
      extend: {
        colors: {
          'red-strong': '#e6332a',              
        },
        backgroundImage: {
          'back': "url('/src/components/Background/assets/back.png')",
          'back-mobile': "url('/src/components/Background/assets/back-mobile.png')",
        }
      }
    },
  }