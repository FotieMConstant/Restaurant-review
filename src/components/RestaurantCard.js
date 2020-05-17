import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Improting ratings component
import HoverRating from './HoverRating';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default function RestaurantCard() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Restaurant 1"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Yaounde, Cameroon
              </Typography>
             <HoverRating/>
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.large} alt="Restaurant 1" src="assets/images/avatars/img.JPG" />
        </ListItemAvatar>
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Restaurant 2"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Douala, Cameroon
              </Typography>
              <HoverRating/>
            </React.Fragment>
          }
        />
         <ListItemAvatar>
          <Avatar className={classes.large} alt="Restaurant 2" src="assets/images/avatars/img.JPG" />
        </ListItemAvatar>
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Restaurant 3"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bafoussam, Cameroon
              </Typography>
              <HoverRating/>
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar className={classes.large} alt="Restaurant 3" src="assets/images/avatars/img.JPG" />
        </ListItemAvatar>
      </ListItem>

      
    </List>
  );
}
