import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e5d33', // Green
    },
    secondary: {
      main: '#ffffff', // White
    },
    background: {
      default: '#ffffff', // White background
    },
    text: {
      primary: '#213547', // Dark text color
    },
  },
})

export default theme