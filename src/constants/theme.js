import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {createTheme} from '@mui/material'
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme

// primary: {
//     main: '#556cd6',
//   },
//   secondary: {
//     main: '#19857b',
//   },