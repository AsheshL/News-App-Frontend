const GET_ARTICLES = `
query getArticles($query: String!, $page: Int){
  getArticles(query: $query, page: $page){
    totalResults
    articles{
      title
      author
      url
      urlToImage
      content
      description
      publishedAt
    }
  }
}
`;

export default GET_ARTICLES;
