import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import FilmList from '../views/FilmList';
import { getFilms } from '../actions';
import { filmsSelector } from '../selectors';
const API = 'https://films--library.herokuapp.com/api/films/';
const GET_QUERY = '';

class FilmsContainer extends Component {
  componentDidMount() {
    axios(API + GET_QUERY)
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
