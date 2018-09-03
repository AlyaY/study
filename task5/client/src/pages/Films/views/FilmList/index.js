import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Film from '../Film';
import Bar from '../Bar';
import style from './styles';

const FilmList = (props) => {
  const {
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
    search, 
    handleSearchChange, 
    handleSearchSubmit,
    handleSortChange,
  };

  return (
    <div className={classes.root}>
      <Bar {...barProps} />
      <div className={classes.list}>
        {filmsContent}
      </div>
    </div>
  )
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
}

export default withStyles(style)(FilmList);
