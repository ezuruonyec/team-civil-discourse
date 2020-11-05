import React from "react"
import {Container} from "@material-ui/core"


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
      <Container style={{position: "relative", top: 0, left: 0, right: 0, height: 550, alignContent:"start", alignItems: "start"}}>
        <ComposableMap
            projection="geoEqualEarth"
            data-tip=""
            projectionConfig={{scale: 170}}
            height="550"
            width="900"
            
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
      </Container>
    )
  }

  export default Map
  