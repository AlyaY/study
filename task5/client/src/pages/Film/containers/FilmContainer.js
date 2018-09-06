import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Film from '../views/Film';
import { setFilm } from '../actions';
import { filmSelector } from '../selectors';
import { filmsSelector } from '../../Films/selectors';
import { getFilm } from '../../../services';
import { tokenSelector } from '../../../selectors';

class FilmContainer extends Component {
  componentDidMount() {
    const { setFilm, films, match: { params: { id }} } = this.props;

    const currentFilm = films.find(({ _id }) => (id === _id));

    if(currentFilm) {
      setFilm({film: currentFilm});

    } else {
      getFilm(id)
      .then(({ data }) => {
        setFilm({film: data});
      });
    }
  }

  componentWillUnmount() {
    const { setFilm } = this.props;

    setFilm({film: {}});
  }

  render () {
    const props = { 
      ...this.props.film,  
      isLogin: (this.props.token.length !== 0)
    };

    return <Film {...props} />
  }
}

FilmContainer.propTypes = {
  token: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  setFilm: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  token: tokenSelector(state),
  film: filmSelector(state),
  films: filmsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setFilm: data => dispatch(setFilm(data)),
});

const FilmContainerWithRouter = withRouter(FilmContainer);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilmContainerWithRouter);

