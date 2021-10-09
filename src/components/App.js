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
            <Route path="/" component={MapWrapper} exact />
            <Route path="/about" component={about} exact />
            <Route path="/search/:term" component={Search} />
            <Route path="/rankings" component={RankingPage} />
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
