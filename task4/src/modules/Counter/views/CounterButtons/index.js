import React from 'react'
import PropTypes from 'prop-types'

import style from './styles'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const CounterButtons = ({ addCounter, deleteCounter, resetCounter, classes }) => {
  return (
    <div className={classes.root}>
      <Button onClick={addCounter} variant='contained' color='primary'>
        Add
      </Button>
      <Button onClick={deleteCounter} variant='contained' color='primary'>
        delete
      </Button>
      <Button onClick={resetCounter} variant='contained' color='primary'>
        reset
      </Button>
    </div>
  )
}

CounterButtons.propTypes = {
  addCounter: PropTypes.func.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired
}

export default withStyles(style)(CounterButtons)
