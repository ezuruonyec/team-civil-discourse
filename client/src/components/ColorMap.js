import React, {Component, Suspense, useEffect} from 'react';
import data1 from '../geoJson/countries.json';
import world from "../geoJson/world.json"
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import ReactCountryFlag from "react-country-flag"
import { getCountry } from '../actions';
import {connect} from "react-redux"
import * as actions from "../actions"


const ColorMap = ({country, getCountry, loading}) => {

  useEffect(() => {
    getCountry()

  }, [])

  const style = (feature) => {
    return {
        fillColor: getColor(country.countries.filter(item => item.name === feature.properties.name).map(filtered => filtered.cd_ranking)), // add cd rating here to get color
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '2',
        fillOpacity: 0.6,
        
    };
}



  const getColor = (d) => {
    return d >= 112 ? '#b30000' :    // 112 +
               d >= 91  ? '#e34a33' : // 91 - 111
               d >= 70  ? '#fc8d59' :  // 70 - 90
               d >= 49  ? '#fdbb84' :  // 49 - 69
               d >= 28   ? '#fdd49e' : // 28 - 48
               d >= 7 ? '#fef0d9' : // 7 - 27
                          '#e1e1e1'; //  no cd rating
  }

  // function getCountryRating(name) {
  //     //console.log(getColor(...country.countries.filter(item => item.name === name).map(filtered => filtered.cd_rating[0])))
    
  //   setTimeout(() => {
  //     return getColor(...country.countries.filter(item => item.name === name).map(filtered => filtered.cd_rating[0]))
  //   }, 1000);
  
  // }
   // return country.countries.filter(item => item.name == name)
    //  country.countries.map(item => {
    //   if(item.name === name) {
    //     console.log(getColor(item.cd_rating[0] > 0 ? item.cd_rating[0] : 0))
    //     return getColor(item.cd_rating[0] > 0 ? item.cd_rating[0] : 0)
    //   }
    // })
  

 
    
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
        

          onEachFeature={(feature, layer ) => {

             // popup for onclick  
                layer.bindPopup(
                '<h5>'+feature.properties.name+'</h5>'+
                '<p>CD Ranking: 12</p>'+
                '<p>Population: 388,000,000</p>'+
                '<p>Internet Access Percentage: 88.5</p>'+
                '<p>Censorship Level: 10 (good)</p>'+
                '<a href="/search/'+feature.properties.name+'">View more</a>')

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
function mapStateToProps({country}) {
  return {country}
}

export default connect(mapStateToProps, actions)(ColorMap)
