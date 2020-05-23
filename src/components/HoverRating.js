import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
    
  },
  wrapper: {
    'margin-top': '10%', 
    display: 'flex',
  }
}));

export default function HoverRating(rating) {
  const classes = useStyles();
  
  return (
    <div className="wrapper">
       {console.log(rating)}
      <span>2.0</span>
        <div className={classes.root}>
        <Rating name="size-medium" defaultValue={2} />
        </div>
    </div>
  );
}
