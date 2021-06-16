import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function RestaurantPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="健康餐盒餐廳推薦" />
      <Grid container spacing={1}>
        
       {/*<Grid item xs={12} md={6}>
          <Widget title="Headings" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" className={classes.text}>
                h1. Heading
              </Typography>
              <Typography variant="h2" className={classes.text}>
                h2. Heading
              </Typography>
              <Typography variant="h3" className={classes.text}>
                h3. Heading
              </Typography>
              <Typography variant="h4" className={classes.text}>
                h4. Heading
              </Typography>
              <Typography variant="h5" className={classes.text}>
                h5. Heading
              </Typography>
              <Typography variant="h6">h6. Heading</Typography>
            </div>
          </Widget>
  </Grid>*/}
        <Grid item xs={12}>
          <Widget title="健康餐盒餐廳推薦" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" color="primary" className={classes.text}>
                hello
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                try 
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                how are u
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                wow
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                good
              </Typography>
              <Typography variant="h6" color="info">
                cj is shit
              </Typography>
            </div>
          </Widget>
        </Grid>
        {/* 
        <Grid item xs={12} md={6}>
          <Widget title="Basic Text Settings" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text}>Basic text</Typography>
              <Typography className={classes.text} weight="light">
                Basic light text
              </Typography>
              <Typography className={classes.text} weight="medium">
                Basic medium text
              </Typography>
              <Typography className={classes.text} weight="bold">
                Basic bold text
              </Typography>
              <Typography className={classes.text}>
                BASIC UPPERCASE TEXT
              </Typography>
              <Typography className={classes.text}>
                basic lowercase text
              </Typography>
              <Typography className={classes.text}>
                Basic Capitalized Text
              </Typography>
              <Typography>
                <i>Basic Cursive Text</i>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Text Size" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text} size="sm">
                Heading Typography SM Font Size
              </Typography>
              <Typography className={classes.text}>
                Heading Typography Regular Font Size
              </Typography>
              <Typography className={classes.text} size="md">
                Heading Typography MD Font Size
              </Typography>
              <Typography className={classes.text} size="xl">
                Heading Typography XL Font Size
              </Typography>
              <Typography className={classes.text} size="xxl">
                Heading Typography XXL Font Size
              </Typography>
            </div>
          </Widget>
        </Grid>
        */}
      </Grid>
    </>
  );
}
