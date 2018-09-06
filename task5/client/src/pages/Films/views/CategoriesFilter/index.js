import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import style from './styles';

const CategoriesFilter =  (props) => {
  const { 
    categories,
    category,
    handleCategoryChange, 
    classes,
  } = props;

  return (
    <TextField
        select
        label="Фильтрация"
        name='categories' 
        value={category}
        onChange={handleCategoryChange}
        className={classes.select}
      >
        {categories && categories.map(({ _id, title}) => (
          <MenuItem key={_id} value={_id}>
            {title}
          </MenuItem>
        ))}
    </TextField>
  )
}

CategoriesFilter.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export default withStyles(style)(CategoriesFilter);
