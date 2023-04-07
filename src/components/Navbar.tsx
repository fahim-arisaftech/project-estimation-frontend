import React from "react";
import { AppBar, Box, Divider, Link, Toolbar, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6" component="div" color="inherit">
            <Link href="#">
              <img
                src="./img/ast.png"
                alt=""
                style={{ width: "50px", marginTop: "10px" }}
              />
            </Link>
          </Typography>
          <Divider />
          <Link href="#" style={{textDecoration:"none"}}>
            <Typography variant="h6" color="white" component="div">
              AriSaf Tech Ltd.
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;