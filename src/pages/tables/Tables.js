import React,{useEffect,useState}from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import ContactUs from "./emailform";
import axios from "axios"
import { DataGrid } from "@material-ui/data-grid";

const cors ='https://cors-anywhere.herokuapp.com/';
const url ='http://192.168.0.3/api.php';
const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  } 
}))

export default function Tables() {
  const classes = useStyles();
  const [product,setProduct] = useState([])

  const columns=[
    {field:'name',headerName:'餐廳名稱' ,width: 400},
    {field:'location',headerName:'地址',width: 500},
    {field:'phone',headerName:'電話',width: 360}
  ]


    useEffect(() => {
      axios.get(`${cors}${url}`)
      .then(function (response){
        setProduct(response.data)
      })
    },[])
  return (
    <>
      <PageTitle title="所有餐廳一欄" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
        <div style={{ width:"100%", height: '600px' }}>
          <DataGrid
            rows={product}
            columns={columns}
            checkboxSelection
            pageSize="10"	          
          >
          </DataGrid>
          </div>
          </Widget>
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
