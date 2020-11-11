import React from 'react';
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=> ({
  searchContainer: {
    marginTop: 10
  },
  searchText: {
    width: 960
  }
}))

function SearchBox() {

  const classes = useStyles()
  return (
    <div className={classes.searchContainer}>
    <TextField classes={{root: classes.searchText}} autoFocus id="news-search" label="Search the news" type="search" variant="outlined" />
    </div>
  )
}

export default SearchBox