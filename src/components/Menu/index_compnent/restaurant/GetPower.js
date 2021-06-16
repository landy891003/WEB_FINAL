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

export default function GetPower() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://cf.shopee.tw/file/c04bb915c2d548734da0e60dc2e42287"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            給力盒子
            </Typography>
            <Typography>
            健康餐也能吃滷牛腱和蒜泥白肉，配菜都來是自家農園，便當上面皆有標示熱量，適合正在減重與快樂健身的你...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://www.facebook.com/Getpower000/">
            Know more...
        </Button>
        <Button size="small" color="primary">
            Like
        </Button>
        </CardActions>
    </Card>
  );
}