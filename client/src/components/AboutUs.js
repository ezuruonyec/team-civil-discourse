import React, {useState} from 'react';
import ReactTooltip from "react-tooltip";
import '../App.css'


export function AboutUs() {

    const [content, setContent] = useState("");
    return (
        <div className="container">
            <div className="header">
                <h1>Global Civil Discourse Map</h1>
            </div>
            <div className="body">
                <h1>Background</h1>
                <p>
                    "The Padnos/Sarosik Civil Discourse Program was founded through 
                    the generous gift of Shelley E. Padnos and Carol Sarosik to help 
                    create more inclusive, tolerant, and peaceful communities"(GVSU 2020). 
                    The current professor of civil discourse is Jeff Kelly Lowenstein, and 
                    he had the great idea of visualizing data in order to make it more accessible 
                    to people who do not have prior knowledge in this area. With the help of students 
                    from GVSU, this map has brought the GVSU community together and promises to 
                    communicate the issues around freedoms that all people should have. With this knowledge 
                    we hope that people will partake in civil discourse and have thought provoking, and 
                    potentially mind changing, conversations.
                </p>    
                <h1>Contributions</h1>
                <p>
                    This project will not be completed any time soon, as this project will continue 
                    to be in progress for the foreseeable future. Through GVSU, this project has started 
                    in the fall of 2020 with a group of three computer science students coding the site, and a full classroom 
                    of students in the Civil Discourse class providing the information. After this semester is over, 
                    professor Kelly Lowenstein hopes to use another group of students in order to further develop 
                    the application, updating it and refining it to a polished, professional website. 
                </p>
            </div>
            <div className="footer">
                <p> For more information, please visit the civil discourse page.</p>
                
            </div>
        </div>
    );
}


export default AboutUs;

