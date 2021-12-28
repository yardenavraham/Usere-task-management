import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#35495e',
    },
    secondary: {
      main: '#347474'
    },
    error: {
      main: '#ff7e67'
    },
    success: {
      main: '#42b883'
    }
  },
});

export default theme