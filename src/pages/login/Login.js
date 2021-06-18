import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
// styles
import useStyles from "./styles";
// logo
import logo from "./logo.svg";
// context
import { useUserDispatch, loginUser} from "../../context/UserContext";
import firebase from "firebase/app";
import "firebase/auth";
import classnames from "classnames";
import google from "../../images/google.svg";

function Login(props) {
  var classes = useStyles();
  // global
  var userDispatch = useUserDispatch();
  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
      <div className={classes.logotypeText}>
        <h1>健康餐盒推薦</h1>
      </div>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login & NewUser" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                  size="large"
                  className={classnames(
                    classes.googleButton,
                    classes.googleButtonCreating,
                  )}
                  onClick={() =>
                    {
                      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                      firebase.auth().signInWithPopup(googleAuthProvider)
                      .then(()=>{
                        loginUser(
                        userDispatch,
                        props.history,
                        setIsLoading,
                        setError,
                        )
                      })
                      .catch((error)=>{
                        console.log(error.message)
                        })
                    }
                  }>
                  <img src={google} alt="google" className={classes.googleIcon} />
                  &nbsp;Sign in with Google
                </Button>
                )}
              </div>
          </React.Fragment>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);


