import React, {Component} from 'react'
import MapWrapper from "./MapWrapper"
import {connect} from "react-redux"
import * as actions from "../actions"
import about from "./AboutUs"
import RankingPage from './RankingPage'

import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../App.css"
import Search from './Search'

class App extends Component {
  componentDidMount() {
    this.props.getCountry();
  }
  render () {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main>
          <Switch>
            <Route exact path="/" component={MapWrapper} />
            <Route exact path="/about" component={about} />
            <Route path="/search/:term" component={Search} />
            <Route exact path="/rankings" component={RankingPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({auth, country}) {
  return {auth, country}
}

export default connect(mapStateToProps, actions)(App)

