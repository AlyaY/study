import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import style from './styles';

const Film =  ({ avatar, title, description, classes }) => {

  return (
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
  )
}

Film.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.array.isRequired
}

export default withStyles(style)(Film);
