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
      <div style={{margin:"auto", width:"90%", marginTop: "-18vh", position:"absolute"}}>
        <ComposableMap
            projection="geoEqualEarth"
            data-tip=""
            projectionConfig={{scale: 155}}
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
                  fill: "#bbd4bb",
                  outline: "none"
                },
                hover: {
                  fill: "#5a6e5a",
                  outline: "none"
                },
                pressed: {
                  fill: "#abd6ab",
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
  