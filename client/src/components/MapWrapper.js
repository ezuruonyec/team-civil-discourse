import React, {Suspense} from "react"
import Header from "./Header"
import ColorMap from "./ColorMap"
import CircularProgress from '@material-ui/core/CircularProgress';

const MapWrapper = () => {

    return(
        <div style={{backgroundColor: "#6c757d", height: "100vh", width: "100vw"}}>
      <Header />
      {/* <Map setTooltipContent={setContent} setHeader={setDummy}/>
      <ReactTooltip>{content}</ReactTooltip> */}

      <Suspense fallback={<CircularProgress />}>
        <ColorMap />
      </Suspense>
      
      
    </div>
    )
}

export default MapWrapper