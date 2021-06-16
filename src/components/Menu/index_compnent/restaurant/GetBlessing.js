import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function GetBlessing() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://menu478319126.files.wordpress.com/2018/05/20915292_1996560517240803_3064692077978080541_n.jpg"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            拾福青果
            </Typography>
            <Typography>
            彎腰耕作，拾食，撿拾來自大地的恩澤；時食，等待破土而出的自然美味，少油低負擔料理...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://www.facebook.com/vegshifu/">
            Know more...
        </Button>
        <Button size="small" color="primary">
            Like
        </Button>
        </CardActions>
    </Card>
  );
}