import React, { useEffect, useState, useRef } from 'react';
import world from "../geoJson/world.json"
import { MapContainer, TileLayer, GeoJSON, Pane } from 'react-leaflet';
import { connect } from "react-redux"
import * as actions from "../actions"
import Legend from "./Legend"
import ReactCountryFlag from "react-country-flag"
import numeral from "numeral"
import * as ColorScheme from "../ColorScheme.js"

const ColorMap = ({ allCountries }) => {

  function getColor(ranking) {
    var newColors = ColorScheme.getActiveColorScheme();
    if (ranking >= 146) return newColors.colorTheme[5];
    else if (ranking >= 117) return newColors.colorTheme[4];
    else if (ranking >= 88) return newColors.colorTheme[3];
    else if (ranking >= 58) return newColors.colorTheme[2];
    else if (ranking >= 29) return newColors.colorTheme[1];
    else if (ranking >= 1) return newColors.colorTheme[0];
    else return newColors.colorTheme[6];
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

  function geoJsonStyle(country) {
    return {
      fillColor: getCountryColor(country.properties.name),
      weight: 1,
      opacity: .5,
      color: 'white',
      dashArray: '0',
      fillOpacity: 1
    };
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
        style={geoJsonStyle}

        onEachFeature={(feature, layer) => {

          // popup for onclick
          layer.bindPopup(
            '<h5>' + feature.properties.name + '</h5>' +
            '<p>Civil Discourse Ranking: ' + getRank(feature.properties.name) + '</p>' +
            '<p>Population: ' + numeral(getPopulation(feature.properties.name)).format('0,0') + '</p>' +
            '<p>Internet Access: ' + getInternetPercent(feature.properties.name) + '%</p>' +
            '<p>Online Censorship Level: ' + getCensorshipLevel(feature.properties.name) + '</p>' +
            '<a href="/search/' + feature.properties.name + '">View more</a>'
          );

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