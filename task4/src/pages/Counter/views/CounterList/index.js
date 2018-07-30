import React from 'react'
import PropTypes from 'prop-types'

import style from './styles'
import CounterContainer from './../../containers/CounterContainer'

import { withStyles } from '@material-ui/core/styles'

const CounterList = ({ listData, action, classes }) => {
  const list = listData.map(({ key }) => {
    return (
      <li className={classes.item} key={key}>
        {<CounterContainer action={action} />}
      </li>
    )
  })

  return (<ul className={classes.list}>{list}</ul>)
}

CounterList.propTypes = {
  action: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired
}

export default withStyles(style)(CounterList)
