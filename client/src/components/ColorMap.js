import React, { useState } from 'react';
import world from "../geoJson/world.json"
import { MapContainer, TileLayer, GeoJSON, Pane } from 'react-leaflet';
import { connect } from "react-redux"
import * as actions from "../actions"
import Legend from "./Legend"
import ReactCountryFlag from "react-country-flag"
import numeral from "numeral"

const ColorMap = ({ allCountries }) => {



  function getColor(discourseRank) {
    return discourseRank >= 146 ? '#b30000' :    // 112 +
      discourseRank >= 117 ? '#e34a33' : // 91 - 111
        discourseRank >= 88 ? '#fc8d59' :  // 70 - 90
          discourseRank >= 58 ? '#fdbb84' :  // 49 - 69
            discourseRank >= 29 ? '#fdd49e' : // 28 - 48
              discourseRank >= 1 ? '#fef0d9' : // 7 - 27
                '#757575'; //  no cd rating
  }


  function getCountryColor(name) {
    return getColor(getRank(name))
  }

  function getRank(name) {
    return allCountries.filter(country => country["CountryName"] === name).map(filtered => filtered["DiscourseRanking"])
  }

  function getPopulation(name) {
    return allCountries.filter(country => country["CountryName"] === name).map(filtered => filtered["Population"])
  }

  function getInternetPercent(name) {
    return allCountries.filter(country => country["CountryName"] === name).map(filtered => filtered["InternetAccessPercent"])
  }

  function getCensorshipLevel(name) {
    return allCountries.filter(country => country["CountryName"] === name).map(filtered => filtered["CensorshipLevel"])
  }
  return (

    <MapContainer
      style={{ margin: "auto", zIndex: "1", marginTop: -10, height: "calc(100% - 61px)" }}
      className="map"
      center={[20, 0]}
      zoom={2.5}
      minZoom={2.5}
      scrollWheelZoom={true}
      touchZoom

      placeholder
      zoomAnimation


    >
      <Pane
        name="labels"
        style={{ zIndex: 650, pointerEvents: "none", opacity: .7 }}
      >
        <TileLayer
          url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          minZoom={2}
          noWrap
        />
      </Pane>

      <Legend />


      <GeoJSON
        data={world}
        //pane="labels"
        style={function (data) {
          return {
            // fillColor: getColor(allCountries.filter(country => country.CountryName === data.properties.name).map(filteredCountry => filteredCountry["DiscourseRanking"])), // add cd rating here to get color
            fillColor: getCountryColor(data.properties.name),
            weight: 1,
            opacity: .5,
            color: 'white',
            dashArray: '0',
            fillOpacity: 1
          }
        }}

        onEachFeature={(feature, layer,) => {

          // popup for onclick
          layer.bindPopup(


            '<h5>' + feature.properties.name + '</h5>' +
            '<p>Civil Discourse Ranking: ' + getRank(feature.properties.name) + '</p>' +
            '<p>Population: ' + numeral(getPopulation(feature.properties.name)).format('0,0') + '</p>' +
            '<p>Internet Access: ' + getInternetPercent(feature.properties.name) + '%</p>' +
            '<p>Online Censorship Level: ' + getCensorshipLevel(feature.properties.name) + '</p>' +
            '<a href="/search/' + feature.properties.name + '">View more</a>')

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




        }}
      />





    </MapContainer>


  )

}
export default connect(null, actions)(ColorMap)