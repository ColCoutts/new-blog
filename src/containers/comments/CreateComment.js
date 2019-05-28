import { connect } from 'react-redux';
import PostForm from '../../components/comments/CommentForm';
import { createComment } from '../../actions/CommentActions';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(title, body) {
    dispatch(createComment(title, body, props.postId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
