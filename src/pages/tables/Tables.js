import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import ContactUs from "./emailform";

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
      <PageTitle title="所有餐廳一欄" />
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
          <Widget title="和我們介紹更多餐廳吧❤"  disableWidgetMenu upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <ContactUs/><br/>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
