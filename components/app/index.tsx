import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import Logo from "../app/Logo";
import Title from "../app/Title";
import React from "react";

const Header: React.VFC = React.memo(() => {
  const headerColor = ["#ff015b", "#05f1ff", "#00ff87", "#ebff00"];
  const colorListIndex = Math.floor(Math.random() * 4);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: headerColor[colorListIndex] }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={1}>
              <Logo />
            </Grid>
            <Grid item xs={9}>
              <Title />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
