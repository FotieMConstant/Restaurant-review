import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LocationOnIcon />
          <Typography
            variant="h6"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            Restaurant review
          </Typography>
          <Typography variant="h6" className={classes.title}></Typography>
          <HelpIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
