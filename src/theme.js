import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
   typography: {
      fontFamily: [
        'PT Serif',
        'serif',
      ].join(','),
    },
   palette: {
      type: 'dark',
      primary: {
         // light: will be calculated from palette.primary.main,
         main: '#92B4DD',
         // dark: will be calculated from palette.primary.main,
         // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
         light: '#fff',
         main: '#ff00ff',
         // dark: will be calculated from palette.secondary.main,
         contrastText: '#fff',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
      tonalOffset: 0.2,
   },
   text: {
      color: '#fff'
   }
});

export default theme;