/** @format */

// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component={Link} to={"/"}>
          Home
        </Typography>
        <Typography component={Link} to={"/form"} color='inherit'>
          Form
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
