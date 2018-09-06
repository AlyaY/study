import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

// import Filter from '../Filter';
// import SearchField from '../SearchField';
import style from './styles';
import { SORT_LIST } from '../../constants';

const Bar =  (props) => {
  const { 
    sort,
    search,
    handleSortChange, 
    handleSearchSubmit,
    handleSearchChange,
    classes
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.col}>
        <form onSubmit={handleSearchSubmit}>
          <Input 
            type='text'
            name='search'
            value={search}
            onChange={handleSearchChange}
            className={classes.field}
          />
          <Button 
            mini 
            type="submit"
            variant="fab"
            color="primary"
            aria-label="Search">
            <SearchIcon />
          </Button>
        </form>
      </div>
      <div className={classes.col}>  
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
      </div>
    </div>
  )
}

Bar.propTypes = {
  sort: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
}

export default withStyles(style)(Bar);
