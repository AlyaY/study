import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'react-stars'

import { withStyles } from '@material-ui/core/styles';

import style from './styles';

const Film =  ({ avatar, gallery, title, description, rating, isLogin, classes }) => {

  const galleryList = gallery && gallery.map(
    (img) => (<img src={img} alt={title} className={classes.galleryItem} />)
  );

  return (
    <div className={classes.card}>
      <img src={avatar} title={title} className={classes.img} />
      <div className={classes.details}>
        <h1 className={classes.title}>{title}</h1>
        <Stars
          className={classes.rating}
          value={rating}
          count={5}
          size={48}
          color2={'#ffd700'}
          edit={isLogin}
          half={false}
          onChange={ratingChanged}
        />
        <p className={classes.description}>{description}</p>
        { galleryList && 
          <div className={classes.gallery}>
            { galleryList }
          </div>
        }
      </div>
    </div>
  )
}

Film.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  isLogin: PropTypes.bool.isRequired,
}

export default withStyles(style)(Film);
