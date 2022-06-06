import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ErrorBoundary from "./ErrorBoundary";

import { MenuContext } from "./../contexts/menu.context";

const OCMenu = (props) => {
  const { isOpen, toggle } = useContext(MenuContext);
  return (
    <ErrorBoundary>
      <Drawer open={isOpen} onClose={toggle}>
        <Box role="presentation" onClick={toggle} onKeyDown={toggle}>
          <List>
            <ListItem key={1} disablePadding>
              <ListItemButton component={NavLink} to="/">
                Home
              </ListItemButton>
            </ListItem>
            <ListItem key={2} disablePadding>
              <ListItemButton component={NavLink} to="about">
                About
              </ListItemButton>
            </ListItem>
            <ListItem key={3} disablePadding>
              <ListItemButton component={NavLink} to="contact">
                Contact
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton component={NavLink} to="people/add">
                Add Person
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ErrorBoundary>
  );
};

export default OCMenu;
