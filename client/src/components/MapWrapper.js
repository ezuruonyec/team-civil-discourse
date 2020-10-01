import React, {useState} from "react"
import ReactTooltip from "react-tooltip"
import Map from "./Map"
import Header from "./Header"

const MapWrapper = () => {
    const [content, setContent] = useState("")
    return(
        <div>
      <Header />
      <Map setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>

      
    </div>
    )
}

export default MapWrapper