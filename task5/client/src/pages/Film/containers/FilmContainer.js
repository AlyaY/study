import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Film from '../views/Film';
import { setFilm } from '../actions';
import { filmSelector } from '../selectors';
import { getFilm } from '../../../services';

class FilmContainer extends Component {
  componentDidMount() {
    const { setFilm, match: { params: { id }} } = this.props;

    getFilm(id)
      .then(({ data }) => {
        setFilm({film: data});
      });
  }

  componentWillUnmount() {
    const { setFilm } = this.props;

    setFilm({film: {}});
  }

  render () {
    const props = { ...this.props.film };

    return <Film {...props} />
  }
}

FilmContainer.propTypes = {
  film: PropTypes.object.isRequired,
  setFilm: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  film: filmSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setFilm: data => dispatch(setFilm(data)),
});

// const FilmContainerWithRouter = withRouter(FilmContainer);

// export default connect(
  //   mapStateToProps,
  //   mapDispatchToProps,
  // )(FilmContainerWithRouter);
  
  const FilmContainerWithRouter =  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FilmContainer);;
export default  withRouter(FilmContainerWithRouter);
