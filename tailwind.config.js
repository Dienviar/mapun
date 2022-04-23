module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '80px' : '80px',
        '100px' : '100px',
        '150px' : '150px',
        '200px' : '200px',
        '250px' : '250px',
        '300px' : '300px',
        '350px' : '350px',
        '400px' : '400px',
        '500px' : '500px',
        '550px' : '505px',
        '600px' : '600px',
        '800px' : '800px',
        '1000px' : '1000px',
        '1300px' : '1300px',
      },
      height: {
        '50px' : '50px',
        '70px' : '70px',
        '80px' : '80px',
        '100px' : '100px',
        '150px' : '150px',
        '200px' : '200px',
        '220px' : '220px',
        '250px' : '250px',
        '300px' : '300px',
        '400px' : '400px',
        '450px' : '450px',
        '500px' : '500px',
        '600px' : '600px',
        '700px' : '700px',
        '800px' : '800px',
        '900px' : '900px',
        '1000px' : '1000px',
      },
      colors: {
        'rgba_black_05' : 'rgba(0,0,0,0.5)',
        'rgba_white_05' : 'rgba(255,255,255,0.5)',
        'blue' : '#064789',
        'red' : '#82243C',
      },
      dropShadow: {
        '0_7_3_rgaba_black_1': '0 7px 3px rgba(0, 0, 0, 1)',
        '0_5_10_rgaba_black_8' : '0 5px 10px rgba(0, 0, 0, 8)'
      }
    },
    screens: {
      'screen250px' : {'max' : '250px'},
      'screen420px' : {'max' : '420px'},
      'screen530px' : {'max' : '530px'},
      'screen650px' : {'max' : '650px'},
      'screen850px' : {'max' : '850px'},
      'screen1050px' : {'max' : '1050px'},
    },  
  },
  plugins: [],
}