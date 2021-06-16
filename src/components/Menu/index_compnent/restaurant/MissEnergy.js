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

export default function MissEnergy() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.6435-9/p720x720/119198908_158365755901881_9174298476741267645_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=85a577&_nc_ohc=dl8Tug1ExcoAX8sI_Xv&_nc_ht=scontent.fybz2-2.fna&tp=6&oh=db1052eafd37cba0144924ea9db96612&oe=60D75032"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            Miss Energy
            </Typography>
            <Typography>
            性價比最高的健身餐，會有地瓜、半顆糖心蛋、三樣配菜，在台灣有多家分店，不管在何處都能享受...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://www.facebook.com/missenergy23253878/">
            Know more...
        </Button>
        <Button size="small" color="primary">
            Like
        </Button>
        </CardActions>
    </Card>
  );
}