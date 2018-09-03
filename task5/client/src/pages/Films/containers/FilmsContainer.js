import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmList from '../views/FilmList';
import { 
  addFilms,
  setFilms,
  nextPage,
  prevPage,
  setFilmsPerPage,
  setSearchString 
} from '../actions';
import {
  filmsSelector,
  perPageSelector,
  currentPageSelector,
  searchSelector 
} from '../selectors';
import { getFilms, findFilms } from '../../../services';

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

  handleSearchChange = (event) => {
    this.props.setSearchString({search: event.target.value});
  }

  handleSearchSubmit = (event) => {
    const { setSearchString, search } = this.props;
    event.preventDefault();
    console.log(search);

    findFilms(search)
    .then(({ data }) => {
      console.log(data)
      nextPage({currentPage: 1});
      setFilms({films: data});

      this.addEvent();
    });

    setSearchString({search: ''});
  }

  render () {
    const props = {
      films:  this.props.films,
      search:  this.props.search,
      handleSearchChange:  this.handleSearchChange,
      handleSearchSubmit:  this.handleSearchSubmit,
    }

    return <FilmList {...props} />
  }
}

FilmsContainer.propTypes = {
  search: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  addFilms: PropTypes.func.isRequired,
  setFilms: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  setFilmsPerPage: PropTypes.func.isRequired,
  setSearchString: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  films: filmsSelector(state),
  currentPage: currentPageSelector(state),
  perPage: perPageSelector(state),
  search: searchSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addFilms: data => dispatch(addFilms(data)),
  setFilms: data => dispatch(setFilms(data)),
  nextPage: data => dispatch(nextPage(data)),
  prevPage: data => dispatch(prevPage(data)),
  setFilmsPerPage: data => dispatch(setFilmsPerPage(data)),
  setSearchString: data => dispatch(setSearchString(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsContainer);
