import { combineReducers } from 'redux';
import posts from './PostReducer';
import comments from './CommentReducer';

export default combineReducers({
  posts,
  comments
});
