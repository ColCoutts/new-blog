import { connect } from 'react-redux';
import PostForm from '../../components/posts/PostForm';
import { createPost } from '../../actions/PostActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
