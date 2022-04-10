import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AppBarComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // style={{ background: "#ef6c00" }}sx={{}}
  return (
    <AppBar
      position="fixed"
      style={{
        background: "transparent",
        // color: "white",
        backdropFilter: "blur(50px)"
      }}
    >
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Box
          sx={{
            // flexWrap: "wrap"
            order: -1
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <LogoDevIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          noWrap
          // align="right"
          // marginRight={2}
          component="div"
        >
          TO DO LIST
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
