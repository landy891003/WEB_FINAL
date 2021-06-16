import React from 'react';
//import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
// }));

export default function Menu() {
  // const classes = useStyles();

  return (
    <Container maxWidth="sm">
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        健康餐盒推薦
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
        It becomes more and more important to eat healthy in nowadays. Here are some 
        stores that sell good healthy lunch boxes. Give it a like if you enjoy it. 
        And then you can see them in your account.
    </Typography>
    {/* <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
        <Grid item>
            <Button variant="contained" color="primary">
            登入
            </Button>
        </Grid>
        <Grid item>
            <Button variant="outlined" color="primary">
            回首頁
            </Button>
        </Grid>
        </Grid>
    </div> */}
    </Container>
  );
}