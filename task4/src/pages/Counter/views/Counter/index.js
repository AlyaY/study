import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RestoreIcon from '@material-ui/icons/SettingsBackupRestoreSharp';
import style from './styles';

const Counter = ({ counter, classes, increment, decrement, reset }) => (
  <div className={classes.root}>
    <h2 className={classes.title}>{counter}</h2>
    <div className={classes.btns}>
      <Button
        className={classes.btn}
        onClick={increment}
        variant='fab'
        color='primary'
        aria-label='Add'>
        <AddIcon />
      </Button>
      <Button
        className={classes.btn}
        onClick={decrement}
        variant='fab'
        color='primary'
      >
        <RemoveIcon />
      </Button>
      <Button
        className={classes.btn}
        onClick={reset}
        variant='fab'
        color='secondary'
      >
        <RestoreIcon />
      </Button>
    </div>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

export default withStyles(style)(Counter);
