import React, { useState } from 'react';
import { CircularProgress, List } from '@material-ui/core';
import ArticleItem from './ArticleItem';
import axiosNewsAPiClient from '../../services/axiosClient';
import GET_ARTICLES from '../../services/getArticles.query';
import data from './mockData.json';

function ArticlesList() {
  // const [articles, setArticles] = useState(data.articles);

  /*   useEffect(() => {
    axiosNewsAPiClient
      .post('', {
        query: GET_ARTICLES,
        variables: { query: 'google' },
      })
      .then((result) => {
        setArticles(result.data.data.getArticles.articles);
      });
  }, []); */

  if (data.articles.length === 0) {
    return <CircularProgress />;
  }

  return (
    <List>
      {data.articles.map((article) => (
        <ArticleItem data={article} />
      ))}
    </List>
  );
}

export default ArticlesList;
