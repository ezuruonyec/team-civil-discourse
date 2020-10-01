import React, {useState} from 'react';
import ReactTooltip from "react-tooltip";
import '../App.css'


export function App() {

    const [content, setContent] = useState("");
    return (
        <div className="container">
            <div className="header">
                <h1>Global Civil Discourse Map</h1>
                <p>About Us</p>

            </div>
            <div class="footer">
                <p> For more information, please contact ...</p>
            </div>
        </div>
    );
}


export default App;
