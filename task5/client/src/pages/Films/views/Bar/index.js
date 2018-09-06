import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import SearchField from '../SearchField';
import Sort from '../Sort';
import CategoriesFilter from '../CategoriesFilter';
import style from './styles';

const Bar =  (props) => {
  const { 
    sort,
    search,
    category,
    categories,
    handleSortChange, 
    handleSearchSubmit,
    handleSearchChange,
    handleCategoryChange,
    classes
  } = props;

  const propsToSearch = {
    search,
    handleSearchSubmit,
    handleSearchChange,
  }

  const propsToSort = {
    sort,
    handleSortChange, 
  }

  const propsToFilter = {
    category,
    categories,
    handleCategoryChange,
  }

  return (
    <div className={classes.root}>
      <div className={classes.col}>
        <SearchField {...propsToSearch} />
      </div>
      <div className={classes.col}> 
        <Sort {...propsToSort} /> 
      </div>
      <div className={classes.col}> 
        <CategoriesFilter {...propsToFilter} /> 
      </div>
    </div>
  )
}

Bar.propTypes = {
  sort: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export default withStyles(style)(Bar);
