import React, { useState } from "react";
import AppBar from "@mui/material/AppBar"; //provides content and actions realated to current screen
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { display } from "@mui/system";

export function MainAppBar({ pages }) {
    const [anchorElNav, setAnchorElNav] = useState(null); //Calling useState hook to initialize the anchorE1Nav state for AppBar Component

    const navigate = useNavigate();
    const { user, logout } = useAuth();

    // 3 ways [function declaration, function assignment, arrow fucniton, name function (recursion), IFFE, class function, object function, constructor function]
    // const handleOpenNavMenu = function() { // this way of defining function makes the invoker inside this function AppBar be the this of the function
        
    // }

    const handleOpenNavMenu = (e) => { //This way of declaring function makes it so that the this keyword refers to the outer context of the function which is the container of it AppBar
        setAnchorElNav(e.currentTarget); // set the component state anchorElNav to the element which this event handler is attached to
    }

    const handleCloseNavMenu = (e, path) => {
        setAnchorElNav(null);
        
        if (path) {
            navigate(path);
        }
    }
    
    return (
        <AppBar position="static">         {/* gives background color, elevation and positioning */}
            <Container maxWidth="xl">   { /*Layout helper which centers any content in it horizontally andset max width based on screen size */ }
                <Toolbar disableGutters> {/*gives correct spacing, height, and alignment for content inside Appbar, for example: 64px height on desktop, 56px on moobile, padding on flex item like icon or button*/}
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}> { /*  renderst text with visual design and semantic intent that matches theme */ }
                        Danh's Military Operation
                    </Typography>

                    <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}> { /* a container like div */ }
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit"> { /* Seem to be the wrapper for any material ui icons-material icon */ }
                            <MenuIcon /> { /* MenuIcon is a type of icon from icons-material */ }
                        </IconButton>
                        <Menu id="appbar-menu" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left" }} open={Boolean(anchorElNav)} onClose={(e) => handleCloseNavMenu(e, "")} sx={{ display: { xs: "block", md: "non" } }}>
                            {pages?.map(page => (
                                <MenuItem key={page.label} onClick={(e) => handleCloseNavMenu(e, page.path)}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                            {!!user && (
                                <MenuItem key={"logout"} onClick={logout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        Danh's Military Operation
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages?.map(page => (
                            <Button key={page.label} onClick={(e) => handleCloseNavMenu(e, page.path)} sx={{ my: 2, color: "white", display: "block" }}>
                                {page.label}
                            </Button>
                        ))}
                        {!!user && (
                            <Button key={"logout"} onClick={logout} sx={{ my: 2, color: "white", display: "block" }}>
                                {"logout"}
                            </Button>
                        )}
                        <Button component={Link} to="/link-one" state={{ foo: "this is state for link 1" }} sx={{ my: 2, color: "white", display: "block" }}>
                            Link 1 Nav
                        </Button>
                        <Button component={Link} to="/link-two" state={{ foo: "this is state for link 1" }} sx={{ my: 2, color: "white", display: "block" }}>
                            Link 2 Nav
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

/*
    MATERIAL UI COMPONENTS LISTS

    {INPUTS COMPONENT} 
        ==> AutoComplete, AutoComplete
        ==> Button, Button (INPUT COMPONENT) "Properties: variant, loading"
        ==> Button Group (INPUT COMPONENT)
        ==> Checkbox, Checkbox
        ==> Floating Action Button
        ==> Radio Button, Radio Button
        ==> Rating, Rating
        ==> Select, Selecting
        ==> slider, Slider
        ...

    {LAYOUT COMPONENT}
        ==> Box (this component is lower level than Container) "this is prefer when the user want to customize their own container"
        ==> COntainer (this component is higher level than box) "this is rpefer when content need to be center and its use for page level layout"

    {DATA DISPLAY}
        ==> Avatar
        ==> Badge
        ==> Chip
        ==> Divider
        ==> Icons
        ==> Material Icons
        ==> List, 
        ==> Table
        ==> Tooltip

    {FEEDBACK}
        ==> 
*/