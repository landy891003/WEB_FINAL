import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
// components
import Layout from "./Layout";

// pages
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";
import Homepage from "../Homepage";

import ReactGa from 'react-ga';
export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  useEffect(()=>{
    ReactGa.initialize('UA-193495993-1')
    ReactGa.pageview(window.location.pathname+window.location.search)
  },[])
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/profile" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/profile" />}
        />
        <Route path='/mainpage' component={Homepage}/>
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/mainpage",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
} 