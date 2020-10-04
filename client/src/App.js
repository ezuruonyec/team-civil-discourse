import React from 'react'
import MapWrapper from "./components/MapWrapper"
import Admin from "./components/admin/Admin"

import deleteMe from "./components/deleteMe"
import {Provider} from "react-redux"
import store from "./store"

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
      <main>
        <Switch>
            <Route path="/" component={MapWrapper} exact />
            <Route path="/admin" component={Admin} />
            <Route path="/deleteme" component={deleteMe} />
        </Switch>
      </main>
    </BrowserRouter>
   
    </Provider>
  );
}

export default App;
