import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
// icons import
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// assests import
import logo from "../../assets/logo/logo.png";
const navItems = [
  "Home",
  "About",
  "Services",
  "Podcast",
  "Gallery",
  "Blogs",
  "Events",
  "Contact Us",
];

function NavBar() {

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);


  function toggleMobileDrawer() {
    setIsMobileDrawerOpen(!isMobileDrawerOpen)
  }
  const renderLogo = <img src={logo} alt="inner-eye" style={{ width: "100%", height: "100%" }} />

  const renderItems = (
    <>
      {navItems?.map((item, index) => (
        <Typography sx={{"&:hover": { color: "secondary.main"}}} key={index}>{item}</Typography>
      ))}
    </>
  );


  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }} >

      <Toolbar disableGutters>

        {/* MOBILE VIEW */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <Box >
            {renderLogo}
          </Box>

          <Box >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMobileDrawer}//function is not being called
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
        {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}


        {/* END MOBILE VIEW */}

        {/* START DESKTOP VIEW */}
        <Box sx={{ justifyContent: "space-between", width: "100%", alignItems: "center", display: { xs: "none", md: "flex" } }}>


          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box >
            {renderLogo}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "30px"
            }}
          >
            {renderItems}
          </Box>


          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ height: "25px", bgcolor: "#232323", borderLeftWidth: 1.5 }} />
            <Box sx={{ mx: "0.5rem", display: "flex", alignItems: "center" }}>
              <LinkedInIcon />
              <PinterestIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ height: "25px", bgcolor: "#232323", borderRightWidth: 1.5 }} />
          </Box>
        </Box>

        {/* END DESKTOP VIEW */}
      </Toolbar>
      <Drawer
        anchor="top"
        open={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      >
        <Box sx={{ textAlign: "center", letterSpacing: ".2rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem", paddingY: 2 }}>
          {renderItems}
        </Box>
        
          
        
        {/* {list(anchor)} */}
      </Drawer>
    </AppBar>
  );
}
export default NavBar;