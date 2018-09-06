import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Film from '../Film';
import Bar from '../Bar';
import style from './styles';

const FilmList = (props) => {
  const {
    isLoading,
    sort,
    films,
    search,
    category,
    categories,
    handleSearchChange,
    handleSearchSubmit,
    handleSortChange,
    handleCategoryChange,
    classes,
  } = props;

  const filmsContent = films.map(film => (
    <div className={classes.card}>
      <Film key={film._id} {...film} />
    </div>
  ));
  
  const barProps = { 
    sort,
    search, 
    handleSearchChange, 
    handleSearchSubmit,
    handleSortChange, 
    handleCategoryChange,
    category,
    categories,
  };

  const progressElem = (
    <div className={classes.progress}>
      <CircularProgress  size={150} />      
    </div>
  );

  return (
    <div className={classes.root}>
      <Bar {...barProps} />
      <div className={classes.list}>
        {filmsContent}
        { isLoading && progressElem }
      </div>
    </div>
  )
}

FilmList.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  films: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export default withStyles(style)(FilmList);
