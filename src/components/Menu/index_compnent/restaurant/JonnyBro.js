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

export default function JonnyBro() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://img.shoplineapp.com/media/image_clips/60372a3bd40c87001b490f8a/original.png?1614228027"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            Jonny Bro
            </Typography>
            <Typography>
            餐點皆由專業營養師團隊及餐飲顧問精心設計而成，完整營養標示及客製化選項，在高纖低脂低GI高蛋白的準則下，規劃美味餐點...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://www.johnnybro.com.tw/">
            Know more...
        </Button>
        
        </CardActions>
    </Card>
  );
}