import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  z-index: 1;
`;

export default class Map extends React.Component {

  componentDidMount(){
    this.map = L.map('map', {
      center: [3.846963, 11.55072],
      zoom: 12,
     
    });
    L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=e8LZc57PV2AwP7LJPKLT', {
      attribution: 'Webapp by Fotie <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(this.map);

  L.marker([3.846963, 11.55072]).addTo(this.map)
    .bindPopup('Your location.')
    .openPopup();

  }

  render(){
    return <Wrapper width ="865" height="555" id="map"/>
  }
}