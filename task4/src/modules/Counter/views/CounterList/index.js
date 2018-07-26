import React from 'react'
import PropTypes from 'prop-types'

import style from './styles'
import CounterContainer from './../../containers/CounterContainer'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const CounterList = ({ listData, action, addCounter, deleteCounter, resetCounter, classes }) => {
  const list = listData.map(({ key }) => {
    return (
      <li className={classes.item} key={key}>
        {<CounterContainer action={action} />}
      </li>
    )
  })

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
      <ul className={classes.list}>{list}</ul>
    </div>
  )
}

CounterList.propTypes = {
  action: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired,
  addCounter: PropTypes.func.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired
}

export default withStyles(style)(CounterList)
