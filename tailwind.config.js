/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens : {
      sm : "350px",
      md : "769px",
      lg : "1024px",
      xl : "1280px",
      "2xl" : "1536px"
    },
    colors : {
    brown: "#53425e",
    LightBrown: "#645550",
    darkBrown: "#2c2523",
    black: "#1e1917",
    white: "#f1e1d9",
    cyan: "#15d1e9",
    LightCyan: "#88e5f0",
    darkCyan: "#009fb3",
    orange: "#fb9718",
    LightOrange: "#fac27b",
    darkOrange: "#d28422",
    grey: "#626965",
    LightGrey: "#978580",
    darkGrey: "#3f4441"
    },
    extend: {
      boxShadow : {
        cyanShadow : "0px 0px 20px 0px rgba(94,206,220,0.5)",
        cyanMediumShadow : "10px 10px 200px 150px rgba(94,206,220,0.5)",
        orangeMediumShadow : "10px 10px 200px 150px rgba(251,153,24,0.5)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
    fontFamily : {
      body : ['Josefin Sans'],
      special : ['Roboto']
    }
  },
  plugins: [],
}

