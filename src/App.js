import './App.css';
import AppHeader from './components/AppHeader'
import SearchBox from './components/SearchBox'
import ArticlesList from './components/ArticlesList'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <SearchBox />
      <ArticlesList />
    </div>
  );
}

export default App;
