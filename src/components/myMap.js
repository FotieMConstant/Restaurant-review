import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

//Styling for the map container
const containerStyle = {
  width: "auto",
  height: "620px",
};

function MyMap() {
  //State for the set lng and lat when getting location
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  // Getting the restaurants to display on map
  const [Feeds, setFeeds] = useState([]);

  //Adding new Resto state
  const [newRestaurant, setnewRestaurant] = useState([]);

  //State to handle modal
  const [open, setOpen] = useState(false);
  //Funtions to hangle Opena and Close of modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setnewRestaurant([]); //Set the Previously clicked coordinates to null
  };

  // Adding a restaurant event handler
  const handleAddResto = () => {
    setOpen(false);
  };

  const mapClick = (e) => {
    console.log(e.latLng);
    setnewRestaurant((previousState) => [
      ...previousState,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
    handleOpen(); //Calling the modal when the user clicks
    console.log(
      "You clicked on the coordinates => lng: " +
        newRestaurant.lng +
        " lat:" +
        newRestaurant.lat
    );
  };

  //Getting the user's coordinates // Lng and Lat
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

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
          <DialogTitle id="form-dialog-title">Add new restaurant</DialogTitle>
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
            />

            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
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
        {
          //Adding a marker to the clicked position
          newRestaurant.map((position) => (
            <Marker
              key={`${position.lat}-${position.lng}`}
              position={{ lat: position.lat, lng: position.lng }}
              icon={{
                path:
                  "M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z",
                fillColor: "#eb3734",
                fillOpacity: 1.0,
                strokeWeight: 0,
                scale: 1,
              }}
            />
          ))
        }

        {/* Displaying a marker on the user's location with the position props */}
        <Marker
          position={userCurrentPosition}
          icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
        />
        {/* Mapping to display the available restaurants around the user's location */}
        {Feeds.map((Feed, index) => (
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
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyMap);
