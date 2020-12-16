import React, {Suspense, useState, useEffect} from "react"
import Header from "./Header"
import ColorMap from "./ColorMap"
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from "react-redux"
import * as actions from "../actions"
import LinearProgress from '@material-ui/core/LinearProgress';

const MapWrapper = ({country, getCountry}) => {

  useEffect(() => {
    getCountry()
  }, [])

 
    return(

        <div style={{backgroundColor: "#6c757d", height: "100vh", width: "100vw"}}>
      <Header />

        <Suspense >
        {country.countries.length >= 173 ? 
            <ColorMap info={country.countries} /> : 
            <CircularProgress 
              
              style={{
                backgroundColor: "transparent",
                height: 100,
                width: 100,
                textAlign: "center",
                margin: "auto",
                marginLeft: "calc(50vw - 100px)",
                marginTop: "calc(50vh - 100px)"
              }} 
            />
        }
        </Suspense>
        
        
     
      
      
    </div>
    )
}


function mapStateToProps({country}) {
  return {country}
}

export default connect(mapStateToProps, actions)(MapWrapper)