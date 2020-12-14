import React, {useState} from 'react';
import world from "../geoJson/world.json"
import {MapContainer, TileLayer, GeoJSON, } from 'react-leaflet';
import {connect} from "react-redux"
import * as actions from "../actions"
import ReactCountryFlag from "react-country-flag"
import Legend from "./Legend"

const ColorMap = ({mode, country, info}) => {

  const [mapMode, setMapMode] = useState(mode ? 'mapbox.light' : 'mapbox.dark' )


  
  function style(c){
    //console.log(getColor(results.filter(item => item.name === feature.properties.name).map(filtered => filtered.cd_rating)))
    console.log(c)
    const style = {
        fillColor: c, // add cd rating here to get color
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.8,
        
    };

   return style
  }

  function getColor(d){
    return d >= 112 ? '#b30000' :    // 112 +
               d >= 91  ? '#e34a33' : // 91 - 111
               d >= 70  ? '#fc8d59' :  // 70 - 90
               d >= 49  ? '#fdbb84' :  // 49 - 69
               d >= 28   ? '#fdd49e' : // 28 - 48
               d >= 7 ? '#fef0d9' : // 7 - 27
                          '#757575'; //  no cd rating
  }


  function getCountryColor(name){
    return getColor(info.filter(item => item.name === name).map(filtered =>filtered.cd_rating))
  }

  function getRank(name) {
    return info.filter(item => item.name === name).map(f => f.cd_ranking)
  }

  function getPopulation(name) {
    return info.filter(item => item.name === name).map(f => f.population)
  }
    
  return (
   
<MapContainer 
style={{margin: "auto", zIndex:"1", marginTop: -10, height: "calc(100% - 61px)" }}
className="map"
center={[20,0]} 
zoom={2.5} 
minZoom={2}
scrollWheelZoom={true}
touchZoom


>
  
<Legend />

<TileLayer
  id={mapMode}
  url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.jpg90?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
  //url='https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Fyc29udWgiLCJhIjoiY2tneDdva2FlMDlyMzJzcnNoaDBjYWd0NCJ9.EdAuOBlxzFjn-Kugib9eBQ'
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  
  noWrap
/>

<GeoJSON 
  data={world}
  
  style={function(data){
      return {
        fillColor: getColor(info.filter(item => item.name === data.properties.name).map(filtered =>filtered.cd_rating)), // add cd rating here to get color
        weight: 1,
        opacity: .5,
        color: 'white',
        dashArray: '0',
        fillOpacity: 1,
        
      }
  }} 
  
  // popup for onclick


  onEachFeature={(feature, layer, ) => {

   
     // popup for onclick
     layer.bindPopup( 

        
        '<h5>'+feature.properties.name+'</h5>'+
        '<p>CD Ranking: '+ getRank(feature.properties.name) +'</p>'+
        '<p>Population: '+ getPopulation(feature.properties.name) +'</p>'+
        '<p>Internet Access Percentage: 88.5</p>'+
        '<p>Censorship Level: 10 (good)</p>'+
        '<a href="/search/'+feature.properties.name+'">View more</a>')

    layer.on('mouseover', function () {
      this.setStyle({
        'fillOpacity': 0.95
      });
    });

    layer.on('mouseout', function () {
      this.setStyle({
        'fillOpacity': 1
      });
    });

    layer.on('loading', function () {
        this.setStyle({
            'fillColor' : getCountryColor(feature.properties.name)
          })
    });

    layer.on("click", function () {
      this.setStyle({
        'fillColor' : getCountryColor(feature.properties.name)
      })
    })
  }}
/>

</MapContainer> 
        
        
       
    ) 
    
}
export default connect(null, actions)(ColorMap)