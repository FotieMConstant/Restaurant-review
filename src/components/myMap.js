import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import FormDialog from './AddRestaurant'

function myMap() {
  function handleClick(event) {
    var lat = event.latLng.lat(),
      lng = event.latLng.lng()
    console.log('You clicked on the coordinates => lng: ' + lng + ' lat:' + lat)
    return <div>{<FormDialog />}</div>
  }
  //My global variables for long and lat
  let longitude
  let latitude
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  function success(pos) {
    var crd = pos.coords
    longitude = crd.longitude
    latitude = crd.latitude

    console.log('Your current position is:')
    console.log(`Latitude : ${latitude}`)
    console.log(`Longitude: ${longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  navigator.geolocation.getCurrentPosition(success, error, options)
  const MyMapComponent = compose(
    withProps({
      /**
       * Fetching data from googleapis with API key
       */
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `150%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `150%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: latitude, lng: longitude }}
      onClick={e => handleClick(e)}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: latitude, lng: longitude }} />
      )}
    </GoogleMap>
  ))

  return (
    <div>
      <MyMapComponent isMarkerShown />
    </div>
  )
}

export default myMap
