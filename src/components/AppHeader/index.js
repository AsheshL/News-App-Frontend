import React from 'react';
import { AppBar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '10px 0px'
  }
}))

function AppHeader() {

  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.root}>
      <Typography variant='h3'> News App</Typography>
    </AppBar>
  )
}

export default AppHeader