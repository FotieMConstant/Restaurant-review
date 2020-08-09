import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import ContentFeed from "./RestaurantList";
// import drawer from './drawer';
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import uuid from "react-uuid";

//Styling for the map container
const containerStyle = {
  width: "auto",
  height: "620px",
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Main() {
  const classes = useStyles();

  // State for newRestaurantName
  const [newRestaurantName, setNewRestaurantName] = useState({
    newRestaurantNameValue: "",
  });
  // Detecting the new restaurant name input change
  const onNewRestaurantNameChange = (e) => {
    setNewRestaurantName({
      newRestaurantNameValue: e.target.value,
    });
  };

  // State for new restaurants rating
  const [newRating, setNewRating] = useState({
    newRatingValue: "",
  });

  // Detecting the new restaurant rating input change
  const onNewRatingChange = (e) => {
    setNewRating({
      newRatingValue: e.target.value,
    });
  };

  // State for newRestaurantAddress
  const [newRestaurantAddress, setNewRestaurantAddress] = useState({
    newRestaurantAddressValue: "",
  });
  // Detecting the new restaurant Address input change
  const onNewRestaurantAddressChange = (e) => {
    setNewRestaurantAddress({
      newRestaurantAddressValue: e.target.value,
    });
  };

  // Filtering restaurants with rating state
  const [filterRating, setfilterRating] = useState({
    filterRatingValue: "5",
  });

  // Detecting the rating input change
  const onFilterRatingChange = (e) => {
    setfilterRating({
      filterRatingValue: e.target.value,
    });
  };

  //State for the set lng and lat when getting location
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  // State for the set lng and lat when user clicks on map
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  // State to store random place_id generated
  const [newPlace_id, setnewPlace_id] = useState("");

  //Getting the user's position
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
      navigator.geolocation.watchPosition(function (position) {
        console.log("WatchPosition => Latitude is :", position.coords.latitude);
        console.log(
          "WatchPosition => Longitude is :",
          position.coords.longitude
        );
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  // Map functions and states below
  // Getting the restaurants to display on map
  const [Feeds, setFeeds] = useState([]);

  //State to handle modal
  const [open, setOpen] = useState(false);
  //Funtions to hangle Opena and Close of modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // New restaurant info object to be pushed to array Feeds
  const newResto = {
    place_id: newPlace_id,
    name: newRestaurantName.newRestaurantNameValue,
    vicinity: newRestaurantAddress.newRestaurantAddressValue,
    rating: newRating.newRatingValue,
    geometry: {
      location: {
        lat: lat, //lat from the state
        lng: lng, //lng from the state
      },
    },
  };
  // Adding a restaurant event handler
  const handleAddResto = () => {
    setOpen(false);
    let place_id = uuid();
    console.log("Restaurant gen =>" + place_id);
    setnewPlace_id(place_id); //Setting the newPlace_id of my new restaurant
    console.log("Newly added resto => " + newResto);
    newResto.place_id = place_id;
    let cloneFeeds = JSON.parse(JSON.stringify(Feeds));
    cloneFeeds.push(newResto);
    setFeeds(cloneFeeds);
  };

  const mapClick = (e) => {
    console.log(e.latLng);
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();

    // Setting the clicked point states
    setLat(lat);
    setLng(lng);

    handleOpen(); //Calling the modal when the user clicks
    console.log(
      "You clicked on the coordinates => lng: " + lng + " lat:" + lat
    );
  };

  //Fetching NearbyPlaces to display marker on the user's location
  useEffect(() => {
    // axios.get(`http://localhost:3000/api/restaurants.json`)
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&type=restaurant&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU`
      )
      .then((res) => {
        let Feeds = res.data.results;
        console.log(Feeds);
        setFeeds(Feeds);
      });
  }, [latitude, longitude]);

  const center = {
    lat: latitude,
    lng: longitude,
  };
  const userCurrentPosition = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom></Typography>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {/* Map */}
            <LoadScript googleMapsApiKey="AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onClick={(e) => mapClick(e)}
              >
                {/* Child components, such as markers, info windows, etc. */}

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Add new restaurant
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Enter restaurant details below
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Restaurant name"
                      type="text"
                      fullWidth
                      value={newRestaurantName.newRestaurantNameValue}
                      onChange={onNewRestaurantNameChange}
                    />
                    <Rating
                      name="rating"
                      defaultValue={0}
                      value={newRating.newRatingValue}
                      onChange={onNewRatingChange}
                    />
                    <TextField
                      margin="dense"
                      id="Address"
                      label="Address"
                      type="text"
                      fullWidth
                      value={newRestaurantAddress.newRestaurantAddressValue}
                      onChange={onNewRestaurantAddressChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleAddResto} color="primary">
                      ADD
                    </Button>
                  </DialogActions>
                </Dialog>

                {/* Displaying a marker on the user's location with the position props */}
                <Marker
                  position={userCurrentPosition}
                  icon={"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                />
                {/* Mapping to display the available restaurants around the user's location */}
                {Feeds.map((Feed, index) =>
                  Feed.rating <= filterRating.filterRatingValue ? (
                    <Marker
                      position={{
                        lat: Feed.geometry.location.lat,
                        lng: Feed.geometry.location.lng,
                      }}
                      icon={{
                        path:
                          "M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z",
                        fillColor: "#375fc4",
                        fillOpacity: 1.0,
                        strokeWeight: 0,
                        scale: 1,
                      }}
                    />
                  ) : (
                    <span></span>
                  )
                )}
              </GoogleMap>
            </LoadScript>
            {/* Map End */}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>
              Nearby Places <br />{" "}
              <h6>
                Filter Restaurants with ratings less than{" "}
                {filterRating.filterRatingValue}
              </h6>
            </h3>
            <Rating
              name="half-rating"
              precision={0.5}
              value={filterRating.filterRatingValue}
              onChange={onFilterRatingChange}
            />
            <ContentFeed
              Feeds={Feeds}
              filterRating={filterRating.filterRatingValue}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
