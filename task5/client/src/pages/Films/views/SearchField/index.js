import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

import style from './styles';

const SearchField =  (props) => {
  const { 
    search,
    handleSearchSubmit,
    handleSearchChange,
    classes
  } = props;

  return (
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
  )
}

SearchField.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
}

export default withStyles(style)(SearchField);
