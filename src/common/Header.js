import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Stack,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {

  return (
    <AppBar position="static">
        <Toolbar>
          <Avatar
            component={Link}
            to="/"
            variant="square"
            src="./logo-white.png"
            alt="logo"
          />
          <Stack justifyContent="space-around" sx={{ mx: 3 }}>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                component={Link}
                to="/assortment"
                sx={{ color: "white", display: "block" }}
                disableTouchRipple
                size="large"
              >
                Асортимент
              </Button>
            </motion.div>
          </Stack>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
