import React from "react"
import {Route} from "react-router-dom"

// AuthenticatedRoute added above App component
function PrivateRoute({component: Component, auth, ...rest}) {
  var num = 0
    const redirect = () => {
        if (auth !== false || null){
            return
        }
        if (num > 1){
            return
        }
        num++
        window.open("/auth/google", "_self")
    }

    return (
      <Route
        {...rest}
        render={(props) => auth 
            ? <Component {...props} {...rest} />
            : redirect()} />
    )
  }
  export default PrivateRoute
