import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Introduct from './index_compnent/Introduct';
import FooterCopy from './index_compnent/FooterCopy';
import Restaurant1 from './index_compnent/Restaurant1';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <ToolMenu/>
      </AppBar> */}
      <main>
        <div className={classes.heroContent}>
          <Introduct/>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            <Restaurant1/>
        </Container>
      </main>
      <FooterCopy/>
    </React.Fragment>
  );
}