import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useEffect } from 'react'
// Improting ratings component
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles(theme => ({
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
    'margin-top': '8px',
  },
  profile: {
    'margin-right': '-120px !important',
  },
  wrapper: {
    'overflow-y': 'scroll',
    height: '525px',
  },
}))

function ContentFeed() {
  const classes = useStyles()
  const [Feeds, setFeeds] = React.useState([])

  useEffect(() => {
    // axios.get(`http://localhost:3000/api/restaurants.json`)
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=4.051056,9.767869&radius=1500&type=restaurant&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU`
      )
      .then(res => {
        let Feeds = res.data.results
        console.log(Feeds)
        setFeeds(Feeds)
      })
  }, [])

  return (
    <div className={classes.wrapper}>
      <Divider />
      {Feeds.map((Feed, index) => (
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
                        <h3>{Feed.name.substring(0, 35)}</h3>
                        <i>{Feed.vicinity.substring(0, 40)}...</i>
                        <br />
                      </span>
                    </Typography>
                    <div className="wrapper">
                      <div className={classes.root}>
                        <span>{Feed.rating}</span>{' '}
                        <Rating
                          name="size-small"
                          defaultValue={Feed.rating}
                          size="small"
                          readOnly
                        />
                      </div>
                    </div>
                  </React.Fragment>
                }
              />
              <div className={classes.profile}>
                <ListItemAvatar>
                  <Avatar
                    className={classes.large}
                    alt={Feed.name}
                    src={Feed.icon}
                  />
                </ListItemAvatar>
              </div>
            </ListItem>
            <Divider />
          </List>
        </div>
      ))}
    </div>
  )
}

export default ContentFeed
