import React, {Component} from 'react'
import MapWrapper from "./MapWrapper"
import Admin from "./admin/Admin"
import RWBlist from "./RWBlist"
import PrivateRoute from "./PrivateRoute"
import {connect} from "react-redux"
import * as actions from "../actions"
import about from "./AboutUs"
import rating from "./RatingMapWrapper"
import deleteMe from "./deleteMe"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../App.css"

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render () {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main>
          <Switch>
              <Route path="/" component={MapWrapper} exact />
              <Route path="/about" component={about} exact />
              <Route path="/rwb" component={RWBlist} exact />
              <Route path="/rating" component={rating} exact />
              <PrivateRoute path="/admin" auth={this.props.auth} component={Admin} />     
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({auth}) {
  return {auth}
}

export default connect(mapStateToProps, actions)(App)
