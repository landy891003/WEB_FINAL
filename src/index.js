import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet'

export const initGA = () => {       
  ReactGa.initialize('UA-193495993-1')
  ReactGa.pageview(window.location.pathname+window.location.search);
  console.log(window.location.pathname + window.location.search);
}
export const GApageView = (page) => {   
  ReactGa.pageview(page);   
}
export const GAmodalView = (modal) => {
  ReactGa.modalview(modal);
};
ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <Helmet>
          <title>健康餐盒推薦💕</title>
        </Helmet>
        <App />
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
