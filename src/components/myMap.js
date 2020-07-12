import React, {useEffect, useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Styling for the map container
const containerStyle = {
  width: 'auto',
  height: '620px'
};


function MyComponent() {
  //State for the set lng and lat when getting location
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

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
   };

  const mapClick = (e) =>{
    setnewRestaurant((previousState)=>[
      ...previousState,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    ])
    handleOpen(); //Calling the modal when the user clicks
    console.log("You clicked on the coordinates => lng: " + newRestaurant.lng + " lat:" + newRestaurant.lat);
  }

  //Getting the user's coordinates // Lng and Lat
  useEffect(()=>{
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(
          function(position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);
              setLongitude(position.coords.longitude);
              setLatitude(position.coords.latitude);
          },
          function(error) {
              console.error("Error Code = " + error.code + " - " + error.message);
          }
      )
      navigator.geolocation.watchPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
      });
  }else{
      console.log("Not Available");
  }
},[]);

const center = {
  lat: latitude,
  lng: longitude
};
const userCurrentPosition = {
  lat: latitude,
  lng: longitude
}
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onClick={e => mapClick(e)}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
          <Button onClick={handleClose} color="primary">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
        {
          newRestaurant.map((position)=>(
            <Marker
              key={`${position.lat}-${position.lng}`}
              position={{ lat:position.lat, lng:position.lng }}
            />
           ))
         }


        {/* Displaying a marker on the user's location with the position props */}
        <Marker position={userCurrentPosition} />
  
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)