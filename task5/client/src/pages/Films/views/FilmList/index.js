import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Film from '../Film';
import style from './styles';

const FilmList = ({ films, classes }) => {
  const filmsContent = films.map(film => (
    <div className={classes.card}>
      <Film key={film._id} {...film} />
    </div>
  ));
  
  return (
    <div className={classes.root}>
      {filmsContent}
    </div>
  )
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired
}

export default withStyles(style)(FilmList);
