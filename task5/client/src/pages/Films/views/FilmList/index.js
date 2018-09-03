import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Film from '../Film';
import Bar from '../Bar';
import style from './styles';

const FilmList = ({ films, search, handleSearchChange, handleSearchSubmit, classes }) => {
  const filmsContent = films.map(film => (
    <div className={classes.card}>
      <Film key={film._id} {...film} />
    </div>
  ));
  
  const props = { search, handleSearchChange, handleSearchSubmit };

  return (
    <div className={classes.root}>
      <Bar {...props} />
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
}

export default withStyles(style)(FilmList);
