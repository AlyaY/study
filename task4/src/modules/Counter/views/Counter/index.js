import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import style from './styles'

const Counter = ({counter, classes, increment, decrement, reset}) => (
  <div className={classes.root}>
    <h2 className={classes.title}>Counter</h2>
    <p className={classes.text}>{counter}</p>
    <div className={classes.btns}>
      <Button
        className={classes.btn}
        onClick={increment}
        variant='contained'
        color='primary'
      >
        increment
      </Button>
      <Button
        className={classes.btn}
        onClick={decrement}
        variant='contained'
        color='primary'
      >
        decrement
      </Button>
      <Button
        className={classes.btn}
        onClick={reset}
        variant='contained'
        color='secondary'
      >
        reset
      </Button>
    </div>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

export default withStyles(style)(Counter)
