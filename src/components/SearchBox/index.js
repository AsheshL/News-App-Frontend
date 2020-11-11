import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  searchContainer: {
    marginTop: 10,
  },
  searchText: {
    width: 960,
  },
}));

function SearchBox({ search }) {
  const classes = useStyles();
  const [input, setInput] = useState('');

  return (
    <div className={classes.searchContainer}>
      <TextField
        classes={{ root: classes.searchText }}
        autoFocus
        onKeyPress={(event) => {
          if (event.key === 'Enter') search(input);
        }}
        onChange={(event) => setInput(event.target.value)}
        id="news-search"
        label="Search the news"
        type="search"
        variant="outlined"
      />
    </div>
  );
}

export default SearchBox;
