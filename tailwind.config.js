module.exports = {
    content: ['./src/**/*.{html,js}'],
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
          'back': "bg-[url('assets/images/back.png')]"
        }
      }
    },
  }