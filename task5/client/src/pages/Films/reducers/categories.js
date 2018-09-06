import { handleActions } from 'redux-actions';

import { setCategories } from '../actions';

const initialState = [{
  title: 'Все',
  _id: '',
}];

export default  handleActions({
  [setCategories]: (state, action) => ([...initialState, ...action.payload.categories]),
}, initialState);
