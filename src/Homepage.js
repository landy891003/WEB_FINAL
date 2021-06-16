import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://img4.goodfon.com/wallpaper/nbig/7/60/frukty-ovoshchi-assorti-fon.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(35, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Homepage(props) {
  const classes = useStyles();

  const handleClick=(history)=>{
    history.push("/login")
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={true} className={classes.image}>
      <div className={classes.paper}>
          <Button style={{width:300,height:160}} variant="outlined" color="secondary" onClick={()=>handleClick(props.history)}>
            <h1>健康餐盒推薦<br/>START</h1>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

