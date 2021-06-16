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

export default function LessSalt() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="https://www.healthittaipei.com.tw/upload/admin/202006171334161.jpg"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            少點鹽
            </Typography>
            <Typography>
            顛覆傳統水煮餐盒印象，當天新鮮食材現烹調，少油少鹽呈現食物的原味，每口都新鮮，簡單卻又不失美味...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://www.healthittaipei.com.tw/index.aspx">
            Know more
        </Button>
        <Button size="small" color="primary">
            Like
        </Button>
        </CardActions>
    </Card>
  );
}