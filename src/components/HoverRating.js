import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HoverRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="size-medium" defaultValue={2} />
    </div>
  );
}
