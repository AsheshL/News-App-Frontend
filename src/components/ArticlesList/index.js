import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress, List, Typography } from '@material-ui/core';
import ArticleItem from './ArticleItem';
import axiosNewsAPiClient from '../../services/axiosClient';
import GET_ARTICLES from '../../services/getArticles.query';
// import data from './mockData.json';

function ArticlesList({ searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const scrollRef = useRef();

  useEffect(() => {
    // Fetch more articles until page 5
    if (page <= 5) {
      axiosNewsAPiClient
        .post('', {
          query: GET_ARTICLES,
          variables: { query: searchQuery, page: page },
        })
        .then((result) => {
          setArticles((articles) =>
            articles.concat(result.data.data.getArticles.articles)
          );
        });
    }
  }, [page, searchQuery]);

  useEffect(() => {
    axiosNewsAPiClient
      .post('', {
        query: GET_ARTICLES,
        variables: { query: searchQuery },
      })
      .then((result) => {
        setArticles(result.data.data.getArticles.articles);
        setPage(1);
      });
  }, [searchQuery]);

  useEffect(() => {
    function loadMoreArticles() {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 100
      ) {
        // User has scrolled to the bottom of the element
        setPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener('scroll', loadMoreArticles);

    return () => window.removeEventListener('scroll', loadMoreArticles);
  }, []);

  return (
    <List ref={scrollRef}>
      {articles.length === 0 && <CircularProgress />}
      {articles.map((article, key) => (
        <ArticleItem key={key} data={article} />
      ))}
      {page >= 5 && <Typography variant="h6">End of Articles</Typography>}
    </List>
  );
}

export default ArticlesList;
