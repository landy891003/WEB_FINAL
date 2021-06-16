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

export default function DrSalt() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://img.shoplineapp.com/media/image_clips/5f8924bae57eed002c81d843/original.png?1602823354"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            Dr. Salt
            </Typography>
            <Typography>
            有人氣餐盒、精緻會議餐盒、增肌減脂餐盒三種選擇。米其林式低溫烹調，多三倍的葉菜含量，上班族充電專用...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://www.drsalt.com.tw/">
            Know more
        </Button>
        <Button size="small" color="primary">
            Like
        </Button>
        </CardActions>
    </Card>
  );
}