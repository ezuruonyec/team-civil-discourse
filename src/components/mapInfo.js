import React, { useContext, useState } from "react"
import AppContext from "./AppContext"
import CountryObj from "./ColorMap";



const MapInfo = () => {
    const country = useContext(AppContext);

    return(
        <>
          <div style={{zIndex: "900",
            position: "fixed",
             bottom: "15px", 
            left: "15px", 
            backgroundColor: "White",
            borderRadius: "5px", 
            textAlign: "center",
            width: "150px",
            height: "190px",
            opacity: "0.7"}}>
             <h2>{country.countryName}</h2>
             <p>Discourse Ranking: {country.countryRank} </p>
             <p>Internet Access: 89%</p>
          </div>
        </>
    )

}
export default MapInfo