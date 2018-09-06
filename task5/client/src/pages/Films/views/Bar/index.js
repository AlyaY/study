import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import SearchField from '../SearchField'
import Filter from '../Filter'
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

  const propsToSearch = {
    search,
    handleSearchSubmit,
    handleSearchChange,
  }

  const propsToFilter = {
    sort,
    handleSortChange, 
  }

  return (
    <div className={classes.root}>
      <div className={classes.col}>
        <SearchField {...propsToSearch} />
      </div>
      <div className={classes.col}> 
        <Filter {...propsToFilter} /> 
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
