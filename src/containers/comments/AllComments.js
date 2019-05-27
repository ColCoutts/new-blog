import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
import { deleteComment } from '../../actions/CommentActions';
import Comments from '../../components/comments/Comments';

const mapStateToProps = state => ({
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  deleteComment(id) {
    dispatch(deleteComment(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
