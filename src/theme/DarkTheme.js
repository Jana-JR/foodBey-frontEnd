const { createTheme } =require('@mui/material');

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#14b8a6',
    },
    secondary: {
      main: '#5A20CB',
    },
    black:{
        main:"#242B2E"
    },
    red:{
        main:"#dc2626"
    },
    background: {
        main:"#000000",
      default: '#0D0D0D',
      paper: '#0D0D0D',
    },
  },
  textColor:{
    main:"#111111"
  },
//   typography: {
//     fontFamily: [
//       'Roboto',
//       'Arial',
//       'sans-serif'
//     ].join(','),
//   },
});

export default darkTheme;