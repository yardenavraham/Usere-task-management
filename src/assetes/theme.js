import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark:'#4F6367',
      main: '#7a9e9f',
      light:'#b8d8d8'

    },
    secondary: {
      main: '#eef5db'
    },
    error: {
      main: '#fe5f55'
    },
    success: {
      main: '#42b883'
    }
  },
});

export default theme