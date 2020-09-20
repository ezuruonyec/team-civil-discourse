import React, {useState} from 'react'
import ReactTooltip from "react-tooltip"
import Map from "./components/Map"
import "./App.css"

function App() {
  const [content, setContent] = useState("")
  return (
    <div>
      <h1>Welcome to our Map</h1>
      <Map setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
