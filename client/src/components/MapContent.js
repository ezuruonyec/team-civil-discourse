import React, {Component, Suspense, useEffect, useState} from 'react';
import data1 from '../geoJson/countries.json';
import world from "../geoJson/world.json"
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import ReactCountryFlag from "react-country-flag"
import { getCountry } from '../actions';
import {connect} from "react-redux"
import * as actions from "../actions"
import axios from "axios"
import { useHistory } from 'react-router-dom'

const MapContent = () => {
    
    

      return (
          <> 

          </>
      )
      
}

function mapStateToProps({country}) {
    return {country}
  }
  
  export default connect(mapStateToProps, actions)(MapContent)