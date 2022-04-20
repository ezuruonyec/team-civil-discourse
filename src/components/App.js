import React, {Component, Fragment, useEffect, useState} from 'react'
import MapWrapper from "./MapWrapper"
import RankingPageWrapper from './RankingPageWrapper'
import Search from './Search'
import {connect} from "react-redux"
import * as actions from "../actions"
import about from "./AboutUs"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../App.css"
import MapInfo from './mapInfo'
import { AppContext } from './AppContext'


// class App extends Component {
  
//   componentDidMount() {
//     this.props.getCountry();
//   }
//   render () {
//     return (
//       <>
//         <BrowserRouter basename={process.env.PUBLIC_URL}>
//         <main>
//           <Switch>
//             <Route exact path="/" render={() =>
//              <>
//               <MapWrapper/>
//               <MapInfo/>
//              </>}/>
//             <Route exact path="/about" component={about} />
//             <Route path="/search/:term" component={Search} />
//             <Route exact path="/rankings" component={RankingPageWrapper} />
//           </Switch>
//         </main>
//         </BrowserRouter>
//       </>
//     )
//   }
// }
const App = () => {
  useEffect(() =>{
    actions.getCountry();
  }, [actions.getCountry]);
  const [cName, aName] = useState("United States");
  const [rank, aRank] = useState(18);


  return (
    <AppContext.Provider 
      value={{
        countryName: cName,
        countryRank: rank,
        setName: () => {},
        setRank: () => {},
      }}>
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
         <main>
          <Switch>
               <Route exact path="/" render={() =>
                 <>
                   <MapWrapper/>
                   <MapInfo/>
                  </>}/>
                 <Route exact path="/about" component={about} />
                 <Route path="/search/:term" component={Search} />
                 <Route exact path="/rankings" component={RankingPageWrapper} />
          </Switch>
         </main>
        </BrowserRouter>
      </>
    </AppContext.Provider>
  )

}

function mapStateToProps({auth, country}) {
  return {auth, country}
}

export default connect(mapStateToProps, actions)(App)

