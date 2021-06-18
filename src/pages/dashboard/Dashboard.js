import React ,{ useState} from "react";
import {
  Grid,
} from "@material-ui/core";
// styles
import useStyles from "./styles";
import UserForm from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
export default function Dashboard(props) {
  var classes = useStyles();

  // local
  const [fields, updateFields] = useState({
    name: "User",
    email: "user@example.com",
    country: "Taiwan",
    intro:"Hello!"
  }); 

  axios.post("http://localhost:8000/profile",fields)

  return (
    <>
      <PageTitle title="個人資料" />
        <Grid item xs={12}>
          <Widget
            upperTitle
            noBodyPadding
            disableWidgetMenu
            bodyClass={classes.tableWidget}
          >
          <div className="container">
            <UserForm fields={fields} updateFields={updateFields} /><br/>
          </div>
          </Widget>
        </Grid>
    </>
  );
}


