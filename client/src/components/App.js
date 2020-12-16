import React, {Component} from 'react'
import MapWrapper from "./MapWrapper"
import Admin from "./admin/Admin"
import PrivateRoute from "./PrivateRoute"
import {connect} from "react-redux"
import * as actions from "../actions"
import about from "./AboutUs"
import dashboard from "./admin/Dashboard"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../App.css"
import Search from './Search'
import Sources from "./Sources"
import RWBlist from './RWBlist'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getCountry();
  }
  render () {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main>
          <Switch>
              <Route path="/" component={MapWrapper} exact />
              <Route path="/about" component={about} exact />
              <Route path="/sources" component={Sources} exact/>
              <Route path="/list" component={RWBlist} exact />

              <Route path="/search/:term" component={Search} />
              <Route path="/admin/dashboard" component={dashboard} exact />
              <PrivateRoute path="/admin" auth={this.props.auth} component={Admin} />     
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
