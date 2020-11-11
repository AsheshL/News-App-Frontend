const GET_ARTICLES = `
query getArticles($query: String!){
  getArticles(query: $query){
    totalResults
    articles{
      title
      author
      description
      publishedAt
    }
  }
}
`

export default GET_ARTICLES