import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// import Filter from '../Filter';
// import SearchField from '../SearchField';
import style from './styles';

const Bar =  ({ search, handleSearchSubmit, handleSearchChange, classes }) => {

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
    </div>
  )
}

Bar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
}

export default withStyles(style)(Bar);
