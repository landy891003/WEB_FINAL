import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box} from '@material-ui/core'

//icons


// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Tables from "../../pages/tables";
// context
import { useLayoutState } from "../../context/LayoutContext";
import Menu from "../Menu/Menu";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/profile" component={Dashboard} />
              <Route path="/app/restaurant" component={Menu} />
              <Route path="/app/likes" component={Tables} />
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
