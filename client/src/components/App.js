import React, {Component} from 'react'
import MapWrapper from "./MapWrapper"
import Admin from "./admin/Admin"
import PrivateRoute from "./PrivateRoute"
import {connect} from "react-redux"
import * as actions from "../actions"
import "bootstrap/dist/css/bootstrap.min.css"
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
