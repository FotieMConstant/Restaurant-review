import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

function myMap(){
const MyMapComponent = compose(
  withProps({
    /**
     * Fetching data from googleapis with API key
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `150%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `150%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 3.846963, lng: 11.55072 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 3.846963, lng: 11.55072 }} />
    )}
  </GoogleMap>
));

return (
 <div> 
   <MyMapComponent isMarkerShown />
 </div>);
    }

export default myMap