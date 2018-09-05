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
    handleSearchChange,
    handleSearchSubmit,
    handleSortChange,
    classes
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
  isLoading: PropTypes.bool.isRequired,
  films: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
}

export default withStyles(style)(FilmList);
