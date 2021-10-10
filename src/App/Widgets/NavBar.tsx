import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import HeniLogo from '../Icons/HeniLogo.svg'

const useStyles = makeStyles({
  root: {
    background: '#fff',
    color: '#000'
  },
});

const NavBar = () => {
  const {root} = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className={root}>
      <Box component="span" sx={{ p: 2 }}>
      <img
        src={HeniLogo}
        alt="HeniLogo"
      />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecorationLine: 'underline', ml: 2 }} >
          Gallery
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar
