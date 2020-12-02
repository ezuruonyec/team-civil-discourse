import React, {useState} from "react"
import ReactTooltip from "react-tooltip"
import Map from "./Map"
import Header from "./Header"
import ColorMap from "./ColorMap"

const MapWrapper = () => {
    const [content, setContent] = useState("")
    const [dummy, setDummy] = useState("")

    return(
        <div style={{backgroundColor: "#6c757d", height: "100vh", width: "100vw"}}>
      <Header />
      {/* <Map setTooltipContent={setContent} setHeader={setDummy}/>
      <ReactTooltip>{content}</ReactTooltip> */}

      <ColorMap />
      
    </div>
    )
}

export default MapWrapper