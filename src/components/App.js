import React, {Component} from 'react'
import MapWrapper from "./MapWrapper"
import RankingPageWrapper from './RankingPageWrapper'
import Search from './Search'
import {connect} from "react-redux"
import * as actions from "../actions"
import about from "./AboutUs"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../App.css"

class App extends Component {
  componentDidMount() {
    this.props.getCountry();
  }
  render () {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main>
          <Switch>
            <Route exact path="/" component={MapWrapper} />
            <Route exact path="/about" component={about} />
            <Route path="/search/:term" component={Search} />
            <Route exact path="/rankings" component={RankingPageWrapper} />
          </Switch>
        </main>
        </BrowserRouter>
      </>
    )
  }
}

function mapStateToProps({auth, country}) {
  return {auth, country}
}

export default connect(mapStateToProps, actions)(App)

