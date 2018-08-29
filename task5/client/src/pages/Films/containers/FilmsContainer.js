import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmList from '../views/FilmList';
import { getFilms } from '../actions';
import { filmsSelector } from '../selectors';
import { films } from '../../../services';
class FilmsContainer extends Component {
  componentDidMount() {
    films()
      .then(({ data }) => {
        this.props.getFilms({films: data})
      });
  }

  render () {
    const props = {
      films:  this.props.films
    }

    return <FilmList {...props} />
  }
}

FilmsContainer.propTypes = {
  films: PropTypes.array.isRequired,
  getFilms: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  films: filmsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getFilms: data => dispatch(getFilms(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsContainer);
