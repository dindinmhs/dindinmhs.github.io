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
        'purple' : '#711c91',
        'blue' : '#133e7c'
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
        'show' : {
          '100%' : {transform : 'translateX(0)', 'opacity' : 1}
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
        'to-up' : {
          '0%' : {transform : 'translatey(5vh)', 'opacity' : 0},
          '100%' : {transform : 'translateX(0)', 'opacity' : 1}
        },
        'to-scale' : {
          '0%' : {transform : 'scale(1.2)'},
          '100%' : {transform : 'scale(1)'}
        },
        'typing' : {
          '100%' : {'background-color' : 'rgb(2 6 23)'}
        },
        'loading' : {
          '100%':{transform: 'rotate(2turn)'}
        },
        'rotate-right' : {
          '0%':{transform: 'translate(-50%, -50%) rotate(0deg) '},
          '100%':{transform: 'translate(-50%, -50%) rotate(360deg)'}
        },
        'rotate-left-orbit' : {
          '0%':{transform: 'translate(-50%, -50%) rotate(0deg) '},
          '100%':{transform: 'translate(-50%, -50%) rotate(-360deg)'}
        },
        'rotate-left' : {
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(-360deg)'}
        },
        'rotate-right-planet' : {
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(360deg)'}
        },
        'rotate-caption' : {
          '0%':{transform: 'translate(20px, -10px) rotate(0deg)'},
          '100%':{transform: 'translate(20px, -10px) rotate(-360deg)'}
        },
        'rotate-right-caption' : {
          '0%':{transform: 'translate(20px, -10px) rotate(0deg)'},
          '100%':{transform: 'translate(20px, -10px) rotate(360deg)'}
        },
        'stars' : {
          'from' : {transform: 'translateY(0)'},
          'to' : {transform: 'translateY(-2000px)'}
        }
      },
      animation : {
        'logo-blue' : 'logo-blue 2.25s ease-in-out infinite',
        'logo-pink' : 'logo-pink 2.25s ease-in-out infinite',
        'backround-home' : 'backround-home 15s linear infinite',
        'to-right' : 'to-right 1s',
        'to-left' : 'to-left 1s',
        'to-down' : 'to-down 1s',
        'typing' : 'typing 0.8s linear infinite',
        'loading':'loading 1s linear infinite',
        'rotate-right':'rotate-right 3s linear infinite',
        'rotate-left':'rotate-left 3s linear infinite',
        'rotate-left-caption':'rotate-caption 3s linear infinite',
        'rotate-left-orbit':'rotate-left-orbit 5s linear infinite',
      },
      backgroundImage : {
        'react' : "url('./public/React.svg')"
      }
    },
  },
  plugins: [],
}

