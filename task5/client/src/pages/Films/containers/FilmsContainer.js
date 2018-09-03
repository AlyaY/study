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
  setSearchString,
  setSortType,
} from '../actions';
import {
  filmsSelector,
  perPageSelector,
  currentPageSelector,
  searchSelector,
  sortSelector,
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
    const { perPage, currentPage, addFilms, setFilms, nextPage, sort } = this.props;

    (currentPage === 1) && setFilms({films: []});

    getFilms(sort, currentPage, perPage)
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
    event.preventDefault();
    
    const { setSearchString, setFilms, nextPage, search } = this.props;

    findFilms(search)
      .then(({ data }) => {
        nextPage({currentPage: 1});
        setFilms({films: data});

        this.removeEvent();
      });

    setSearchString({search: ''});
  }

  handleSortChange = (event) => {
    const { setSortType, setFilms, nextPage } = this.props;
    const newSortValue = event.target.value

    setSortType({sort: newSortValue});
   
    getFilms(newSortValue)
      .then(({ data }) => {
        nextPage({currentPage: 1});
        setFilms({films: data});

        this.removeEvent();
      });
  }
  
  handleSortSubmit = (event) => {
    event.preventDefault();
  }

  render () {
    const props = {
      films:  this.props.films,
      search:  this.props.search,
      handleSearchChange:  this.handleSearchChange,
      handleSearchSubmit:  this.handleSearchSubmit,
      handleSortChange:  this.handleSortChange,
    }

    return <FilmList {...props} />
  }
}

FilmsContainer.propTypes = {
  sort: PropTypes.string.isRequired,
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
  setSortType: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  films: filmsSelector(state),
  currentPage: currentPageSelector(state),
  perPage: perPageSelector(state),
  search: searchSelector(state),
  sort: sortSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addFilms: data => dispatch(addFilms(data)),
  setFilms: data => dispatch(setFilms(data)),
  nextPage: data => dispatch(nextPage(data)),
  prevPage: data => dispatch(prevPage(data)),
  setFilmsPerPage: data => dispatch(setFilmsPerPage(data)),
  setSearchString: data => dispatch(setSearchString(data)),
  setSortType: data => dispatch(setSortType(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsContainer);
