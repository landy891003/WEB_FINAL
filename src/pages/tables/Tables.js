import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import DemoForm from "./emailform";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

// data

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="喜歡的餐廳" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="餐廳項目"
            data={datatableData}
            columns={["餐廳名稱", "地址", "電話"]}
            options={{
              filterType: "checkbox",
              download:false,
              print:false,
              viewColumns:false
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="和我們介紹更多餐廳"  disableWidgetMenu upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <DemoForm/><br/>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
