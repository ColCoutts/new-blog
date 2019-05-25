import { connect } from 'react-redux';
import PostDetail from '../../components/posts/PostDetail';
import { getPost } from '../../selectors/postSelectors';

const mapStateToDispatch = (state, id) => ({
  post: getPost(state, id)
});
