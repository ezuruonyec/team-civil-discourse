import React, {useState} from "react"
import ReactTooltip from "react-tooltip"
import Map from "./RatingMap"
import Header from "./Header"

const MapWrapper = () => {
    const [content, setContent] = useState("")
    const [dummy, setDummy] = useState("")

    return(
        <div>
      <Header />
      <Map setTooltipContent={setContent} setHeader={setDummy}/>
      <ReactTooltip>{content}</ReactTooltip>

      
    </div>
    )
}

export default MapWrapper