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
import { setLoadingState } from '../../../actions';
import {
  filmsSelector,
  perPageSelector,
  currentPageSelector,
  searchSelector,
  sortSelector,
} from '../selectors';
import { isLoadingSelector } from '../../../selectors';
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
    const { setLoadingState, perPage, currentPage, addFilms, setFilms, nextPage, sort } = this.props;

    (currentPage === 1) && setFilms({films: []});
    setLoadingState({isLoading: true});

    getFilms(sort, currentPage, perPage)
      .then(({ data }) => {
        nextPage({currentPage: currentPage + 1});
        addFilms({films: data});
        setLoadingState({isLoading: false});

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
    
    const { setLoadingState, setSearchString, setFilms, nextPage, search } = this.props;

    setLoadingState({isLoading: true});

    findFilms(search)
      .then(({ data }) => {
        nextPage({currentPage: 2});
        setFilms({films: data});
        setLoadingState({isLoading: false});

        this.removeEvent();
      });

    setSearchString({search: ''});
  }

  handleSortChange = (event) => {
    const { sort, setLoadingState, setSortType, setFilms, nextPage, perPage } = this.props;
    const newSortValue = event.target.value

    if(sort !== newSortValue) {
      setSortType({sort: newSortValue});
      setLoadingState({isLoading: true});

      this.removeEvent();
    
      getFilms(newSortValue, 1, perPage)
        .then(({ data }) => {
          setFilms({films: data});
          nextPage({currentPage: 2});
          setLoadingState({isLoading: false});

          this.addEvent();
        });
    }
  }
  
  handleSortSubmit = (event) => {
    event.preventDefault();
  }

  render () {
    const props = {
      isLoading: this.props.isLoading,
      sort: this.props.sort,
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
  isLoading: PropTypes.bool.isRequired,
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
  setLoadingState: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
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
  setLoadingState: data => dispatch(setLoadingState(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsContainer);
