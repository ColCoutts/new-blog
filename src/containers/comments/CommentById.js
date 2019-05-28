import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
import Comments from '../../components/comments/Comments';
import { deleteComment } from '../../actions/CommentActions';

//useful because will allow user to click on comment and get body in relation to its id which it pulls from the url
const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, { postId })
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  deleteComment(id) {
    dispatch(deleteComment(postId, id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
