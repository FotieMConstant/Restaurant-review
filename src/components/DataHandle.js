import React from 'react';
import axios from 'axios';
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
import { useEffect } from 'react';

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
      width: theme.spacing(11),
      height: theme.spacing(11),
      'margin-top': '8px'
    },
    profile:{
        'margin-right': '-120px !important'
    },
  }));


function ContentFeed() {
    const classes = useStyles();
   const [Feeds, setFeeds] = React.useState([]);
  
    useEffect(() =>{
        axios.get(`http://localhost:3000/api/restaurants.json`)
        .then(res => {
          let Feeds = res.data;
          setFeeds(Feeds);
          console.log(res.data);
        })
    }, [])

        return (
          <div>
           <Divider/>
            { Feeds.map((Feed,i) => 
            <div key={i}>

            <List className={classes.root}>
            <ListItem alignItems="flex-start">
         
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                       <span>
                       <h3>{Feed.restaurantName}</h3>
                       {Feed.address.substring(0,40)}...<br/>
                       </span>
                    </Typography>
                   <HoverRating rating={Feed.restaurantName}/>
                  </React.Fragment>
                }
              />
              <div  className={classes.profile}>
              <ListItemAvatar>
                <Avatar className={classes.large} alt="Restaurant 1" src="assets/images/avatars/img.JPG" />
              </ListItemAvatar>
              </div>
            </ListItem>
            <Divider/>

          </List>
          </div>
            )}
          </div>
        )
      
   
}


export default ContentFeed