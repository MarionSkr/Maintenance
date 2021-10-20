module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pale': '#ECE6D0',
        'rouge': '#AA383A',
        'military': '#37402B',
        'orange': '#C16432',
      },
      height: {
        '112': '26rem',
        '124': '30rem',
        
       },
      backgroundImage: theme => ({
        'marketing': "url('img/marketing.png')",
       }),
    },
    fontFamily: {
      'sans': ['Open Sans'],
      heading : ['Open Sans'],
     }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
