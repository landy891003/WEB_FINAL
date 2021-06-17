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

export default function NjuTurn() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cardMedia}
            image="data:image/png;base64,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"
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
            njuTurn
            </Typography>
            <Typography>
            使用台灣當地食材，用最簡單的烹煮方式，呈現食物最美的原味。nju 是 new 的音標，扭轉大家對便當和日常生活的看法...
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" href="https://njuturn.tw/">
            Know more...
        </Button>
        
        </CardActions>
    </Card>
  );
}