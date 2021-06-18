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

export default function LifeKitchen() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://cf.shopee.tw/file/ab2f292e2eaab47624fb3a1fa4ee3ebb_tn"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            生活倉廚
            </Typography>
            <Typography>
            提供全橄欖油料理，並強調純手工修清肉品，與低溫配送原生雞蛋，希望每位顧客都能顧到健康又能吃飽的雙重享受...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://lifekitchen.oddle.me/zh_TW/">
            Know more...
        </Button>
        
        </CardActions>
    </Card>
  );
}