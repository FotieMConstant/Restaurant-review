import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import ContentFeed from './RestaurantList';
// import drawer from './drawer';
import MyMap from './MyMap';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={8}> 
          <Paper className={classes.paper}>
          <MyMap/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>Nearby Places</h3>
            <Rating name="size-medium" defaultValue={1} />
            <ContentFeed/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
