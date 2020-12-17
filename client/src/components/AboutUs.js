import React from 'react';
import Header from "./Header"
import Container from '@material-ui/core/Container';
export function AboutUs() {
    return (
            <>
            <Header />
            <Container>
                

                <h1>Background</h1>
                <p>
                The Padnos/Sarosik Civil Discourse Program was founded through the generous gift of Shelley E. Padnos and Carol Sarosik to help create “more inclusive, tolerant, and peaceful communities."(GVSU 2020).
                 The current civil discourse professor is Jeff Kelly Lowenstein, who noticed that there was no global map ranking the level of civil discourse by country. 
                 He thought that building such a map could help create a civil discourse rating and make the subject more accessible to people who did not have prior knowledge in this area. 
                 With the help of students from GVSU, this map seeks to communicate the implications for civil discourse of the tension between those people working to share accurate information and those individuals, organizations and governments seeking to misinform and disinform the public.  
                 We hope this tool will play a positive in helping people engage in civil discourse and have thought provoking, potentially mind-changing, conversations.
                </p>    
                <h1>Contributions</h1>
                <p>
                This project will continue for the forseeable future. It began in the summer of 2020, when Padnos/Sarosik Intern Samantha Johnson and Lanthorn Editor-In-Chief Nicholas Moran looking up and entering information about each country’s national and international promises of press and media freedoms.  
                It progressed in the fall, when students in the Civil Discourse class provided the information for the map while a group of three Computer Science students built the map and website that houses it.  
                After this semester is over, Professor Kelly Lowenstein plans to work with another group of students in order to further develop the application, updating it and refining it to a polished, professional website.
                </p>
                <h1>Methodology</h1>
                <p>
                    We went through an extensive process to identify the variables we used to arrive at each country’s civil discourse rating.  
                    We sought to find variables that would illustrate the intersection between national commitments to freedom of speech and media with the reality that residents experience with press freedom, internet access and online censorship.  
                </p>
                <p>
                    Our initial steps involved researching and recording each country’s national and 
                    international promises to freedom of speech and media.  For the international level this 
                    consisted of seeing which countries that belonged to the United Nations had supported the 
                    <a href="https://www.un.org/en/member-states/">2000 Millenium Declaration.</a> The declaration reaffirmed the 
                    <a href="https://www.un.org/en/universal-declaration-human-rights/">1948 Universal Declaration of Human Rights</a> that included freedom of speech and media.  For the national level we looked at each country’s constitution to determine if it supported these rights.  
                </p>
                <p>
                    We also looked into nations’ <a href="https://rsf.org/en/ranking">Reporters Without Borders 2020 World Press Freedom Index </a>ranking, <a href="https://www.census.gov/data-tools/demo/idb/region.php">population, </a><a href="https://data.worldbank.org/indicator/IT.NET.USER.ZS">internet access, </a>
                    <a href="https://www.vpnmentor.com/blog/online-censorship-country-rank/">online censorship, </a> and <a href="https://data.worldbank.org/country/">poverty levels.</a> 
                    For each of these variables we sought to find a database that would include as many countries as possible.  We also explored whether countries had passed fake news laws, but did not find a single database that contained a comprehensive listing of these measures.  
                </p>
                <p>
                    Eventually, we decided to include the Reporters Without Borders Press Freedom Index, the level of internet access, the online censorship level and whether the country signed the Millennium Declaration.  After discussing the relative weight each variable should receive, we decided that that the press freedom index should be 37.5% of the score, the internet access should be 30% of the score, the online censorship should be 22.5% of the score, and the Millennium Declaration should be 10% of the score.  Since each of the variables used different scales, we based our calculation on the country’s ranking on that variable relative to other countries. We included the country’s population and poverty rate in its individual profile, but did not include them in the final calculation.  We used the most recent year for the level of internet access. However, those years varied in the database we used, so that portion of the rating based on that variable is not completely consistent. 
                </p>
            </Container>
            </>
    )
}


export default AboutUs;

