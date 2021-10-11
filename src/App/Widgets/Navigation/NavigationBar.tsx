
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import HeniLogo from "../../Icons/HeniLogo.svg"
import NavigationItem from "./NavigationItem";

const useStyles = makeStyles({
  root: {
    background: "#fff",
    color: "#000"
  }
});

const NavigationBar = () => {
  const { root } = useStyles()
  const { pathname } = useLocation()
  const isGalleryPage = pathname.includes("/gallery")
  const isHomePage = pathname.includes("/home")
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={root}>
          <Box component="span" sx={{ p: 2, mr: 3 }}>
            <img
              src={HeniLogo}
              alt="HeniLogo"
            />
          </Box>
          <NavigationItem isActive={isHomePage} to="/home" label="Home" />
          <NavigationItem isActive={isGalleryPage} to="/gallery" label="Gallery" />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavigationBar
