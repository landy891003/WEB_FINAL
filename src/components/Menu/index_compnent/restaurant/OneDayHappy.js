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

export default function OneDayHappy() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/logo/menu_logo_00c935.jpg"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            一日樂食
            </Typography>
            <Typography>
            多種餐點組合，讓你天天吃不膩，眾多優惠歡迎大家使用，從每週一天開始，養成樂食的習慣...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://deliexpress.oddle.me/zh_TW/">
            Know more...
        </Button>
        <Button size="small" color="primary">
            Like
        </Button>
        </CardActions>
    </Card>
  );
}