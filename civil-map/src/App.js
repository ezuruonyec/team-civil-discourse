//import 'react-native-gesture-handler';
import React, {useState} from 'react';
import ReactTooltip from "react-tooltip";
import './App.css'
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    const [content, setContent] = useState("");
        return (
            <container>
            <div className="container">
                <Header />
                <p><Map setTooltipContent={setContent}/></p>
                <ReactTooltip>{content}</ReactTooltip>
            </div>

            </container>
        );
    }


export default App;
