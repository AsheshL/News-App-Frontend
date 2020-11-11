import './App.css';
import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import SearchBox from './components/SearchBox';
import ArticlesList from './components/ArticlesList';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <AppHeader />
      <SearchBox search={setSearch} />
      {search && <ArticlesList searchQuery={search} />}
    </div>
  );
}

export default App;
