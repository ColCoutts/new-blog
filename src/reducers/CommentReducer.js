import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/CommentActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
