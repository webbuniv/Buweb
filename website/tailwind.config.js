/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem'
  	},
  	colors: {
  		current: 'currentColor',
  		transparent: 'transparent',
  		white: '#FFFFFF',
  		black: '#090E34',
  		dark: '#1D2144',
  		primary: '#4A6CF7',
  		yellow: '#FBB040',
  		'body-color': '#959CB1'
  	},
  	screens: {
  		xs: '450px',
  		sm: '575px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		'2xl': '1400px'
  	},
  	extend: {
  		boxShadow: {
  			signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
  			one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
  			sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'
  		},
  		animation: {
  			'shrink-out': 'shrinkOut 1s forwards',
  			'grow-in': 'growIn 1s forwards'
  		},
  		keyframes: {
  			shrinkOut: {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(0)',
  					opacity: '0'
  				}
  			},
  			growIn: {
  				'0%': {
  					transform: 'scale(0)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
