import React, {Suspense, useState, useEffect} from "react"
import Header from "./Header"
import ColorMap from "./ColorMap"
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from "react-redux"
import * as actions from "../actions"

const MapWrapper = ({country, getCountry, mode, loading}) => {

  useEffect(() => {
    getCountry()
   
  }, [])

    const [lightMode, setLightMode] = useState(true)
    return(

      

        <div style={{backgroundColor: "#6c757d", height: "100vh", width: "100vw"}}>
      <Header setMode={setLightMode} mode={lightMode} />
      {/* <Map setTooltipContent={setContent} setHeader={setDummy}/>
      <ReactTooltip>{content}</ReactTooltip> */}

        <Suspense fallback={CircularProgress}>
        {country.countries.length >= 173 ? 
            <ColorMap info={country.countries} mode={lightMode ? "mapbox.light" : "mapbox.dark"} /> : <CircularProgress />
        }
        </Suspense>
        
        
     
      
      
    </div>
    )
}


function mapStateToProps({country}) {
  return {country}
}

export default connect(mapStateToProps, actions)(MapWrapper)