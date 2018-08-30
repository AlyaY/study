import React, { Component } from 'react';
import { withRouter } from 'react-router';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmList from '../views/FilmList';
import { addFilms, nextPage, prevPage, setFilmsPerPage } from '../actions';
import { filmsSelector, perPageSelector, currentPageSelector } from '../selectors';
import { getFilms } from '../../../services';

class FilmContainer extends Component {
  componentDidMount() {
    // const { perPage, currentPage, addFilms, nextPage } = this.props;
    console.log(this.props)
    // getFilm()
    //   .then(({ data }) => {
    //     nextPage({currentPage: currentPage + 1});
    //     addFilms({films: data});
    //   });

    // window.addEventListener('scroll', this.scrollHandler);
  }

  render () {
    const props = {
      films:  this.props.films
    }

    return <FilmList {...props} />
  }
}

FilmContainer.propTypes = {
  films: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  addFilms: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  setFilmsPerPage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  films: filmsSelector(state),
  currentPage: currentPageSelector(state),
  perPage: perPageSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addFilms: data => dispatch(addFilms(data)),
  nextPage: data => dispatch(nextPage(data)),
  prevPage: data => dispatch(prevPage(data)),
  setFilmsPerPage: data => dispatch(setFilmsPerPage(data)),
});

const FilmContainerWithRouter = withRouter(FilmContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmContainerWithRouter);
