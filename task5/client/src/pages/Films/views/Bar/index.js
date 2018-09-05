import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// import Filter from '../Filter';
// import SearchField from '../SearchField';
import style from './styles';

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
      <form onSubmit={handleSearchSubmit}>
        <input 
          type='text'
          name='search'
          value={search}
          onChange={handleSearchChange}
        />
        <button >Search</button>
      </form>
      <select name='sort' 
        value={sort}
        onChange={handleSortChange}
      >
        <option value='year'>год</option>
        <option value='title'>имя</option>
      </select>
    </div>
  )
}

Bar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
}

export default withStyles(style)(Bar);
