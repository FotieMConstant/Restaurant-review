import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
// Improting ratings component
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import StreetViewPhoto from "./StreetViewPhoto";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    "margin-top": "8px",
  },
  profile: {
    "margin-right": "-120px !important",
  },
  wrapper: {
    "overflow-y": "scroll",
    height: "525px",
  },
  waiting: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ContentFeed(props) {
  const classes = useStyles();

  //State for details
  const [Details, setDetail] = useState(null);

  // Adding new restaurant name state
  const [newReviewName, setnewReviewName] = useState({
    newReviewUserValue: "",
  });
  // Adding new restaurant Review state
  const [newReview, setnewReview] = useState({
    newReviewValue: "",
  });
  // Adding new restaurant Review rating state
  const [newReviewRating, setnewReviewRating] = useState({
    newReviewRatingValue: "",
  });

  // My object to be pushed into the array
  const myNewReview = {
    author_name: newReviewName.newReviewUserValue,
    rating: newReviewRating.newReviewRatingValue,
    text: newReview.newReviewValue,
  };
  const [expanded, setExpanded] = React.useState({});

  //Function to handle adding a new review
  const handleNewReview = (placeID) => {
    console.log("Adding a new review with place_id => " + placeID);
    let cloneDetails = JSON.parse(JSON.stringify(Details));
    // In case the restaurant has no review
    if (!cloneDetails.reviews) {
      cloneDetails.reviews = []; //I make it an array so i can push to it
    }
    cloneDetails.reviews.push(myNewReview);
    setDetail(cloneDetails);
  };
  // Detecting the name input change
  const onNewReviewNameChange = (e) => {
    setnewReviewName({
      newReviewUserValue: e.target.value,
    });
  };
  // Detecting the review input change
  const onNewReviewChange = (e) => {
    setnewReview({
      newReviewValue: e.target.value,
    });
  };
  // Detecting the new rating input change
  const onNewReviewRatingChange = (e) => {
    setnewReviewRating({
      newReviewRatingValue: e.target.value,
    });
  };
  const handleExpandClick = (place_id) => {
    expanded[place_id] = !expanded[place_id];
    setExpanded(expanded);
    getPlaceDetails(place_id);
  };
  const getPlaceDetails = (place_id) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,reviews,formatted_phone_number&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU`
      )
      .then((res) => {
        let Detail = res.data.result;
        console.log(JSON.stringify(res.data.result));
        setDetail(Detail);
        console.log("Your Resto ID is => " + place_id);
        console.log("HERE ARE THE DETAILS " + Detail);
      });
  };

  return (
    <div>
      <Card className={classes.wrapper}>
        {props.Feeds.map((Feed, index) =>
          Feed.rating <= props.filterRating ? (
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
                            <h3 key={index}>{Feed.name.substring(0, 35)}</h3>
                            <i key={index}>
                              {Feed.vicinity.substring(0, 40)}...
                            </i>
                            <br />
                          </span>
                        </Typography>
                        <div className="wrapper">
                          <div className={classes.root}>
                            <span key={index}>{Feed.rating}</span>
                            <Rating
                              name="half-rating"
                              precision={0.5}
                              defaultValue={Feed.rating}
                              key={index}
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
                        key={index}
                      />
                    </ListItemAvatar>
                  </div>
                </ListItem>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded[Feed.place_id],
                    })}
                    onClick={() => handleExpandClick(Feed.place_id)}
                    aria-expanded={expanded[Feed.place_id]}
                    aria-label="show more"
                    key={index}
                  >
                    <ExpandMoreIcon size="small" className={classes.dropper} />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={expanded[Feed.place_id]}
                  timeout="auto"
                  unmountOnExit
                >
                  {Details && Details.reviews ? (
                    Details.reviews.map((Detail, index) => (
                      <List>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar
                              alt="Remy Sharp"
                              src={Detail.profile_photo_url}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            style={{
                              width: "60px",
                              "word-wrap": "anywhere",
                            }}
                            primary={Detail.author_name}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  <Rating
                                    name="half-rating"
                                    precision={0.5}
                                    defaultValue={Detail.rating}
                                    size="small"
                                    readOnly
                                  />
                                </Typography>
                                <br />
                                {Detail.text}
                                <br />
                                <em>{Detail.relative_time_description}</em>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </List>
                    ))
                  ) : (
                    <div className={classes.waiting}>
                      <LinearProgress />
                    </div>
                  )}
                  <form className={classes.root} noValidate autoComplete="off">
                    <CardContent>
                      <div>
                        <TextField
                          label="Username"
                          id="standard-size-small"
                          placeholder="Enter your name"
                          size="small"
                          value={newReviewName.newReviewUserValue}
                          onChange={onNewReviewNameChange}
                          name="userName"
                        />
                      </div>
                      <br />
                      <div>
                        <Rating
                          name="rating"
                          defaultValue={0}
                          value={newReviewRating.newReviewRatingValue}
                          size="small"
                          onChange={onNewReviewRatingChange}
                        />
                      </div>
                      <div>
                        <TextField
                          label="Review"
                          id="filled-size-small"
                          placeholder="Enter your review"
                          multiline
                          rows={4}
                          size="small"
                          value={newReview.newReviewValue}
                          onChange={onNewReviewChange}
                        />
                      </div>
                      <br />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleNewReview(Feed.place_id)}
                        key={index}
                      >
                        Add review
                      </Button>
                      <br />
                      <StreetViewPhoto
                        key={index}
                        restoName={Feed.name}
                        latitude={Feed.geometry.location.lat}
                        longitude={Feed.geometry.location.lng}
                      />
                    </CardContent>
                  </form>
                </Collapse>
                <br />
                <Divider />
              </List>
            </div>
          ) : (
            <span></span>
          )
        )}
      </Card>
    </div>
  );
}

export default React.memo(ContentFeed);
