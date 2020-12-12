import React, {Component} from 'react';
import data1 from '../geoJson/countries.json';
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';

class ColorMap extends Component{
    constructor(){
        super();
    
    // color scale - will changed in future
     this.getColor = (d) => {
              return d > 1000 ? '#800026' :
               d > 500  ? '#BD0026' :
               d > 200  ? '#E31A1C' :
               d > 100  ? '#FC4E2A' :
               d > 50   ? '#FD8D3C' :
               d > 20   ? '#FEB24C' :
               d > 10   ? '#FED976' :
                          '#FFEDA0';
    }
    this.getColor = this.getColor.bind(this);
    this.style = (feature) =>{
        return {
            fillColor: this.getColor(55), // add cd rating here to get color
            weight: 1.5,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.6
        };
    }
    this.style = this.style.bind(this);
}
    render(){
      return(
            <MapContainer 
            style={{margin: "auto", zIndex:"1", marginTop: -10, height: "90vh" }}
            className="map"
            center={[20,0]} 
            zoom={2.5} 
            minZoom={2}
            scrollWheelZoom={true}
            touchZoom
            >
            <TileLayer
              id='mapbox.light'
              url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              noWrap
            />
            <GeoJSON 
              data={data1}
              style={this.style} 
              
              // popup for onclick
              onEachFeature={(feature, layer) => layer.bindPopup(
                '<h5>'+feature.properties.ADMIN+'</h5>'+
                '<p>CD Ranking: 12</p>'+
                '<p>Population: 388,000,000</p>'+
                '<p>Internet Access Percentage: 88.5</p>'+
                '<p>Censorship Level: 10 (good)</p>'+
                '<a href="/search/'+feature.properties.ADMIN+'">View more</a>')}
            />
            
          </MapContainer>
    
        )
    }
}
export default ColorMap;