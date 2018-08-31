import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmList from '../views/FilmList';
import { addFilms, nextPage, prevPage, setFilmsPerPage } from '../actions';
import { filmsSelector, perPageSelector, currentPageSelector } from '../selectors';
import { getFilms } from '../../../services';

class FilmsContainer extends Component {
  componentDidMount() {
    this.getFilms();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  addEvent() {
    window.addEventListener('wheel', this.scrollHandler);
  }

  removeEvent() {
    window.removeEventListener('wheel', this.scrollHandler);
  }

  getFilms() {
    const { perPage, currentPage, addFilms, nextPage } = this.props;

    getFilms(currentPage, perPage)
    .then(({ data }) => {
      nextPage({currentPage: currentPage + 1});
      addFilms({films: data});

      this.addEvent();
    });
  }

  scrollHandler = () => {
    const { height, top } = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if(windowHeight >= height + top) {
      this.removeEvent();
      this.getFilms();
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsContainer);
