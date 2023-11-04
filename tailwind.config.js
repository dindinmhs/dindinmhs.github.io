/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'pixel' : 'Pixelify Sans',
        'logo' : 'Black Ops One',
        'texturina' : 'texturina',
        'ibm' : 'IBM Plex Sans' 
      },
      colors : {
        'dark-blue' : '#091833',
        'blue' : '#133e7c',
        'light-blue' : '#0abdc6',
        'pink' : '#ea00d9',
        'purple' : '#711c91'
      },
      keyframes : {
        'logo-blue' : {
          '0% , 100%' : {'color' : '#0abdc6'},
          '10% , 90%' : {'color': 'rgb(100 116 139)'},
        },
        'logo-pink' : {
          '0% , 100%' : {'color' : '#ea00d9'},
          '10% , 90%' : {'color': 'rgb(100 116 139)'},
        },
        'backround-home' : {
          '0%' : {transform: 'translateY(100vh) scale(0)'},
          '100%' : {transform: 'translateY(-10vh) scale(1)'},
        },
        'to-right' : {
          '0%' : {transform : 'translateX(-10vw)', 'opacity' : 0},
          '100%' : {transform : 'translateX(0)', 'opacity' : 1}
        },
        'to-left' : {
          '0%' : {transform : 'translateX(10vw)', 'opacity' : 0},
          '100%' : {transform : 'translateX(0)', 'opacity' : 1}
        },
        'to-down' : {
          '0%' : {transform : 'translatey(-10vh)', 'opacity' : 0},
          '100%' : {transform : 'translateX(0)', 'opacity' : 1}
        },
      },
      animation : {
        'logo-blue' : 'logo-blue 2.25s ease-in-out infinite',
        'logo-pink' : 'logo-pink 2.25s ease-in-out infinite',
        'backround-home' : 'backround-home 15s linear infinite',
        'to-right' : 'to-right 1s',
        'to-left' : 'to-left 1s',
        'to-down' : 'to-down 1s',
      }
    },
  },
  plugins: [],
}

