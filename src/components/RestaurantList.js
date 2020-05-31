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
import { useEffect } from 'react';
// Improting ratings component
import Rating from '@material-ui/lab/Rating';

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
        })
    }, [])

        return (
          <div>
           <Divider/>
            { Feeds.map((Feed, index) => 
            <div key={index}>

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
                         <i>{Feed.address.substring(0,40)}...</i><br/>
                       </span>
                    </Typography>
                    <div className="wrapper">
                      <div className={classes.root}>
                         {
                          (typeof(Feed.ratings)=='object')? //Checking if it's an object
                          <div>
                             
                            {
                              // Another map function to loop through the sub array for stars
                              Feed.ratings.map((subFeed, k)=>
                                <div>
                                  {/* {subFeed.stars} */}
                                 {/* the ratings array here per restuarant */}
                                </div>
                              )
                            }
                          </div>
                          :
                          null//Returning null if it's not an object
                        }
                      <span>{Feed.ratings[0].stars}.0</span> <Rating name="size-small" defaultValue={Feed.ratings[0].stars} size="small" readOnly/>
                      <p>Form { Feed.ratings.length } ratings</p>
                      </div>
                    </div>

                  </React.Fragment>
                }
              />
              <div  className={classes.profile}>
              <ListItemAvatar>
                <Avatar className={classes.large} alt={Feed.restaurantName} src="assets/images/avatars/img.JPG" />
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