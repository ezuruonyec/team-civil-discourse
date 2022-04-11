import React from 'react';
import Header from "./Header"
import Container from '@material-ui/core/Container';
import team1Image from "../images/Team1.png";
import team2Image from "../images/Team2.png";
import IDSTeamFall2021 from "../images/Team4.png";
import CISTeamFall2021 from "../images/Team4CIS.png";
import Grid from '@material-ui/core/Grid';


export function AboutUs() {
    return (
        <> 
            <Header/>
            <Container> 
                <h1 style = {{ fontFamily: "Average", textDecoration: 'underline', backgroundColor: "#bfd3e6"}}>Background</h1>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    The Padnos/Sarosik Civil Discourse Program was founded through the generous gift of Shelley E. Padnos and Carol Sarosik to help create “more inclusive, tolerant, and peaceful communities."(GVSU 2020).
                    Current Padnos/Sarosik Endowed Professor of Civil Discourse Jeff Kelly Lowenstein noticed that there was no global map ranking the level of civil discourse by country.
                    He thought that building such a map could help make the subject more accessible to people who did not have prior knowledge in this area and provide a standard for meaningful dialogue.
                    With the help of students from GVSU, this map seeks to communicate the implications for civil discourse of the tension between those people working to share accurate information and those individuals, organizations and governments seeking to misinform and disinform the public.
                    We hope this tool will play a positive role in helping people engage in civil discourse and have thought-provoking conversations.
                </p> 
                <h1 style = {{ fontFamily: "Average", textDecoration: 'underline', backgroundColor: "#bfd3e6"}}>Methodology</h1>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    We went through an extensive process to identify the variables we used for each country’s civil discourse rating.
                    We sought to find variables that would illustrate the intersection between national commitments to freedom of speech and media with the reality residents experience in the areas of press freedom, internet access and online censorship.
                </p>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    Our initial steps involved researching and recording each country’s national and
                    international promises to freedom of speech and media.  For the international level this
                    consisted of seeing which countries that belonged to the United Nations had supported the
                    <a href="https://www.un.org/en/member-states/"> 2000 Millennium Declaration.</a> The declaration reaffirmed the
                    <a href="https://www.un.org/en/universal-declaration-human-rights/"> 1948 Universal Declaration of Human Rights</a> that included freedom of speech and media.
                </p>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    We also looked into nations’ <a href="https://rsf.org/en/ranking">Reporters Without Borders 2020 World Press Freedom Index </a>ranking, <a href="https://www.census.gov/data-tools/demo/idb/region.php">population, </a><a href="https://data.worldbank.org/indicator/IT.NET.USER.ZS">internet access, </a>
                    <a href="https://www.vpnmentor.com/blog/online-censorship-country-rank/"> and online censorship, </a>
                    For each of these variables we sought to find a database that would include as many countries as possible.  We also explored whether countries had passed fake news laws, but did not find a single database that contained a comprehensive listing of these measures.
                </p>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    Eventually, we decided to include the Reporters Without Borders Press Freedom Index, the level of internet access, the online censorship level and whether the country signed the Millennium Declaration.  After discussing the relative weight each variable should receive, we decided that that the press freedom index should be 37.5% of the score, the internet access should be 30% of the score, the online censorship should be 22.5% of the score, and the Millennium Declaration signature should be 10% of the score.  Since each of the variables used different scales, we based our calculation on the country’s ranking on that variable relative to other countries. We included the country’s population in its individual profile, but did not include them in the final calculation.
                </p>
                <h1 style = {{ fontFamily: "Average", textDecoration: 'underline', backgroundColor: "#bfd3e6"}}>Contributors</h1>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    This project began in the summer of 2020, when Padnos/Sarosik Intern Samantha Johnson and Lanthorn Editor-In-Chief Nicholas Moran looking up and entering information about each country’s national and international promises of press and media freedoms.
                </p>
                <p style = {{ fontFamily: "Verdana", textAlign: 'justify'}}>
                    The IDS 350 class taught by Professor Kelly Lowenstein contributed all of the information used in the Civil Discourse Map. We would like to recognize each student in the class, the seven computer science students who worked on the web application, and Computer Science Professor Jonathan Englesma.
                </p>

                <center>
                    <p style = {{ fontFamily: "Verdana"}}>
                        <h3 style = {{ fontFamily: "Verdana", textAlign: 'center'}}>
                            The IDS Students During the Fall 2020 Semester
                        </h3>
                            <p>
                                Deleon Brown, Ashley Bylsma, Madelyne Crace, Colin DeYoung, Jayce Efting, Olivia Fellows, Lauren Hasse, Trevor Hubert, Rachel Jongsma, Toria Keyes, Ariel Mejia, 
                                    Chase Meulebrouck, Nicholas Reid, Grace Stille, Jenia Thompson, Michael Thorsen, and Kellen Voss.
                            </p>
                            <img src={team1Image} alt="Fall 2020 CIS Team" max-width="50%" height="300"></img>
                    </p>

                
                    <p style = {{ fontFamily: "Verdana"}}>
                        <h3 style = {{ fontFamily: "Verdana", textAlign: 'center'}}>
                            The CIS Students During the Fall 2020 Semester
                        </h3>
                        <p>
                            Josh Lowell, Carson Uecker-Herman, and Olivia Vitali.
                        </p>
                    </p>

                
                    <p style = {{ fontFamily: "Verdana"}}>
                        <h3 style = {{ fontFamily: "Verdana", textAlign: 'center'}}>
                            The CIS Students During the Winter 2021 Semester
                        </h3>
                        <p>
                            Aaron Bager, Stephen Kiser, Nicholas Sheehan, and Omar Tiba.
                        </p>
                            <img src={team2Image} alt="Winter 2021 CIS Team" max-width="50%" height="300"></img>
                    </p>
                
                
                    <p style = {{ fontFamily: "Verdana"}}>
                        <h3 style = {{ fontFamily: "Verdana", textAlign: 'center'}}>
                            The IDS 350 Class of Fall 2021
                        </h3>
                            <p>
                                Allysa Babcock, Jake Brewer, Brea Buchan, Nolan Carr, Jennastasia Chapa, Emma DeBoer, Genevieve Doctor, Keely Duehmig, Marta Grabowski, 
                                Brianna Haywood, Olivia Hernalsteen,, Garrett Koss, Lindsay Marcil, Brianna McKinney, Sky Overton-Wier, Zach Pierangeli, Tierra Sheets, Guadalupe Solis, Rebecca Wilcox.
                            </p>
                            <img src = {IDSTeamFall2021} alt = "IDS 350 Fall 2021" max-width="50%" height="300"></img>
                    </p>

                
                    <p style = {{ fontFamily: "Verdana"}}>
                        <h3 style = {{ fontFamily: "Verdana", textAlign: 'center'}}>
                            The CIS Students of Fall 2021
                        </h3>
                            <p>
                                James Weitzmann, Nathan Banaszak, Felix Clinthorne, Rebecca Trap.
                            </p>
                            <img src = {CISTeamFall2021} alt = "CIS Team Fall 2021" max-width="50%" height="300" margin = "1px"></img>
                    </p>
                </center>

            </Container>
        </>
    )
}

export default AboutUs;
