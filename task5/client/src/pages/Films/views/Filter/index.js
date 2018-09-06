import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import style from './styles';
import { SORT_LIST } from '../../constants';

const Bar =  (props) => {
  const { 
    sort,
    handleSortChange, 
    classes
  } = props;

  return (
    <TextField
        select
        label="Сортировка"
        name='sort' 
        value={sort}
        onChange={handleSortChange}
        className={classes.select}
      >
        {SORT_LIST.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
    </TextField>
      
  )
}

Bar.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
}

export default withStyles(style)(Bar);
