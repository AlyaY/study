import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import style from './styles';

const Film =  ({ avatar, title, description, classes, _id }) => {

  return (
    <Link to={`film/${_id}`} className={classes.root}>
      <Card className={classes.card}>
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
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}

Film.propTypes = {
  _id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.array.isRequired
}

export default withStyles(style)(Film);
