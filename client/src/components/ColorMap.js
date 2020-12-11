import React, {Component, Suspense} from 'react';
import data1 from '../geoJson/countries.json';
import world from "../geoJson/world.json"
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import ReactCountryFlag from "react-country-flag"

const ColorMap = () => {
  const getColor = (d) => {
    return d >= 112 ? '#b30000' :    // 112 +
               d >= 91  ? '#e34a33' : // 91 - 111
               d >= 70  ? '#fc8d59' :  // 70 - 90
               d >= 49  ? '#fdbb84' :  // 49 - 69
               d >= 28   ? '#fdd49e' : // 28 - 48
               d >= 7 ? '#fef0d9' : // 7 - 27
                          '#e1e1e1'; //  no cd rating
  }

  const style = (feature) =>{
        return {
            fillColor: getColor(12.1), // add cd rating here to get color
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.6,
            
        };
    }
    
  return(
        <MapContainer 
        style={{margin: "auto", zIndex:"1", marginTop: -10, height: "calc(100% - 61px)" }}
        className="map"
        center={[20,0]} 
        zoom={2.5} 
        minZoom={2}
        scrollWheelZoom={true}
        touchZoom
        
        >
        <TileLayer
          id='mapbox.dark'
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.jpg90?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
          //url='https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Fyc29udWgiLCJhIjoiY2tneDdva2FlMDlyMzJzcnNoaDBjYWd0NCJ9.EdAuOBlxzFjn-Kugib9eBQ'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          noWrap
          
        />
        <GeoJSON 
          data={world}
          style={style} 
          
          // popup for onclick
        

          onEachFeature={(feature, layer) => {
            layer.bindPopup(
              '<h5>'+feature.properties.admin +'</h5>' +
              '<p>CD Rating...</p>'+
              '<a href="/search/'+feature.properties.admin+'">View more</a>')

            layer.on('mouseover', function () {
              this.setStyle({
                'fillOpacity': 0.5
              });
            });

            layer.on('mouseout', function () {
              this.setStyle({
                'fillOpacity': 0.6
              });
            });

            layer.on('loading', function () {
              return <p>Loading...</p>
            });

          }}
        />
        
      </MapContainer>
    
    )
    
}

export default ColorMap

// class ColorMap extends Component{
//     constructor(){
//         super();
    
//     // color scale - will changed in future
//      this.getColor = (d) => {
//               return d > 1000 ? '#b30000' :
//                d > 500  ? '#e34a33' :
//                d > 200  ? '#fc8d59' :
//                d > 100  ? '#e34a33' :
//                d > 50   ? '#b30000' :
//                           '#e1e1e1';
//     }
//     this.getColor = this.getColor.bind(this);
//     this.style = (feature) =>{
//         return {
//             fillColor: this.getColor(201), // add cd rating here to get color
//             weight: 1.5,
//             opacity: 1,
//             color: 'white',
//             dashArray: '3',
//             fillOpacity: 0.6
//         };
//     }
//     this.style = this.style.bind(this);

    
// }
//     render(){
//       return (
//         content()
//       )
      
//     }
// }


// function content() {
//   return(
//     <MapContainer 
//     style={{margin: "auto", zIndex:"1", marginTop: -10, height: "90vh" }}
//     className="map"
//     center={[20,0]} 
//     zoom={2.5} 
//     minZoom={2}
//     scrollWheelZoom={true}
//     touchZoom
    
//     >
//     <TileLayer
//       id='mapbox.light'
//       url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.jpg90?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
//       //url='https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Fyc29udWgiLCJhIjoiY2tneDdva2FlMDlyMzJzcnNoaDBjYWd0NCJ9.EdAuOBlxzFjn-Kugib9eBQ'
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       noWrap
      
//     />
//     <GeoJSON 
//       data={world}
//       style={this.style} 
      
//       // popup for onclick
//       onEachFeature={(feature, layer) => layer.bindPopup(
//         '<h5>'+feature.properties.admin+'</h5>'+
//         '<p>CD Rating...</p>'+
//         '<a href="/search/'+feature.properties.ADMIN+'">View more</a>')}
//     />
    
//   </MapContainer>

// )
// }
// export default ColorMap;