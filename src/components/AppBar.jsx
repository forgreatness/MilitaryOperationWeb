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
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export function AppBar({ pages }) {
    const [anchorE1Nav, setAnchorE1Nav] = useState(null); //Calling useState hook to initialize the anchorE1Nav state for AppBar Component

    const navigate = useNavigate();
    const { use, logout } = useAuth();
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}