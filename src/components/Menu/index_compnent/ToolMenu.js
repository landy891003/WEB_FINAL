import React from 'react';
import EmojiFoodBeverageRoundedIcon from '@material-ui/icons/EmojiFoodBeverageRounded';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function ToolMenu() {
  const classes = useStyles();

  return (
    // <React.Fragment>
      //<CssBaseline />
    //   <AppBar position="relative">
        <Toolbar>
          <EmojiFoodBeverageRoundedIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Healthy Meal
          </Typography>
        </Toolbar>
    //   </AppBar>
    // </React.Fragment>
  );
}