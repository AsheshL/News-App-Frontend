import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 960,
    margin: '0 auto',
  },
  img: {
    height: 400,
    objectFit: 'cover',
  },
  divider: {
    width: 960,
    margin: '10px auto',
  },
}));

function ArticleItem({ data }) {
  const { title, description, url, urlToImage, content } = data;
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={() => window.open(url)}>
          <CardHeader title={title} subheader={description} />
          <CardMedia
            classes={{ img: classes.img }}
            component="img"
            image={urlToImage}
            title={title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider className={classes.divider} />
    </>
  );
}

export default ArticleItem;
