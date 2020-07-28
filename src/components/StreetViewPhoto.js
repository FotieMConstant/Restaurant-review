import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StreetViewPhoto(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("Props gottten => lat => " + props.latitude + " lng => " + props.longitude);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Street View
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Street view photo of <em>{props.restoName}</em>
            </Typography>
          </Toolbar>
        </AppBar>
        <img
          src={`https://maps.googleapis.com/maps/api/streetview?size=600x625&location=${props.latitude},${props.longitude}&radius=2000&heading=151.78&pitch=-0.76&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU`}
          alt="Google Streetview"
        />
      </Dialog>
    </div>
  );
}
