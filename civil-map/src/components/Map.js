import React from "react"

import {
    ComposableMap,
    Geographies,
    Geography,
  } from "react-simple-maps"
  
  // url to a valid topojson file
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  
  const Map = () => {
    return (
      <div style={{margin:"auto", width:"90%", marginTop: "-14vh", position:"absolute"}}>
        <ComposableMap
            projection="geoEqualEarth"
        >
          <Geographies geography={geoUrl}>
            {({geographies}) => geographies.map(geo =>
              <Geography key={geo.rsmKey} geography={geo} />
            )}
          </Geographies>
        </ComposableMap>
      </div>
    )
  }

  export default Map
  