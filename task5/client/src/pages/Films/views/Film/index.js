import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import style from './styles';

const Film =  ({ avatar, title, description, year, classes, _id }) => {

  return (
    <Card className={classes.root}>
      <Link to={`film/${_id}`} className={classes.card}>
        <CardMedia
          className={classes.img}
          image={avatar}
          title={title}
        />
        <div className={classes.details}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom component="h3">
              {year}
            </Typography>
            <Typography component="p" className={classes.text}>
              {description}
            </Typography>
          </CardContent>
        </div>
      </Link>
    </Card>
  )
}

Film.propTypes = {
  _id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
}

export default withStyles(style)(Film);
