import React, { useState, useEffect } from 'react';
import { CircularProgress, List } from '@material-ui/core';
import ArticleItem from './ArticleItem';
import axiosNewsAPiClient from '../../services/axiosClient';
import GET_ARTICLES from '../../services/getArticles.query';
// import data from './mockData.json';

function ArticlesList({ searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosNewsAPiClient
      .post('', {
        query: GET_ARTICLES,
        variables: { query: searchQuery },
      })
      .then((result) => {
        setArticles(result.data.data.getArticles.articles);
      });
  }, [searchQuery]);

  if (articles.length === 0) {
    return <CircularProgress />;
  }

  return (
    <List>
      {articles.map((article, key) => (
        <ArticleItem key={key} data={article} />
      ))}
    </List>
  );
}

export default ArticlesList;
