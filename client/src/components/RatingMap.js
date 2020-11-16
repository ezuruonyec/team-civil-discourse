import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {Container} from "@material-ui/core"
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#eeeeee", "#333333"]);

const MapChart = ({setTooltipContent}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/temp.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Container style={{position: "relative", top: 0, left: 0, right: 0, height: 550, alignContent:"start", alignItems: "start"}}>
        <ComposableMap
            projection="geoEqualEarth"
            data-tip=""
            projectionConfig={{scale: 170}}
            height="550"
            width="900"
        >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                return (
                    <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                    onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setTooltipContent(`${NAME}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
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
                );
                })
            }
            </Geographies>
        )}
        </ComposableMap>
    </Container>
  )
}

export default MapChart;

