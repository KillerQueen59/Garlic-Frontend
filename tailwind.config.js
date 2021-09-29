module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
         },
      colors:{
        "coco":{
          "normal":"#948E68"
        },
        "plant":{
          "darker":"#122320",
          "less-darker":"#2F4847",
          "normal":"#556C62",
          "bright":"#294E21",
          "brighter": "#EBF0EB"
        }
      
      }   
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'), 

  ],
}
