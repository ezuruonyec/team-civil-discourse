import React, { Suspense } from "react"
import Header from "./Header"
import ColorMap from "./ColorMap"
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux"
import * as actions from "../actions"

const MapWrapper = ({ country: world, getCountry }) => {

  //useEffect(() => {
  //  getCountry()
  //}, [getCountry])


  return (
    <div style={{ backgroundColor: "#6c757d", height: "100vh", width: "100vw" }}>
      <Header />
      <Suspense>
        {world.countries.length >= 171 ?
          <ColorMap allCountries={world.countries} /> :
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


function mapStateToProps({ country }) {
  return { country }
}

export default connect(mapStateToProps, actions)(MapWrapper)
