import React from "react"

import {
    ComposableMap,
    Geographies,
    Geography,
  } from "react-simple-maps"
  
  // url to a valid topojson file
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  
  const Map = ({ setTooltipContent }) => {
    return (
      <div style={{margin:"auto", width:"90%", marginTop: "-14vh", position:"absolute"}}>
        <ComposableMap
            projection="geoEqualEarth"
            data-tip=""
            projectionConfig={{scale: 170}}
        >
          <Geographies geography={geoUrl}>
            {({geographies}) => geographies.map(geo =>
              <Geography 
              key={geo.rsmKey} 
              geography={geo} 
              stroke="#FFF" 
              strokeWidth={.5}
              onMouseEnter={() => {
                const { NAME } = geo.properties;
                setTooltipContent(`${NAME}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "#004b87",
                  outline: "none"
                },
                pressed: {
                  fill: "#006cc2",
                  outline: "none"
                }
              }}
              />
            )}
          </Geographies>
        </ComposableMap>
      </div>
    )
  }

  export default Map
  