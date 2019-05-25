import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post, deletePost }) {
  return (
    <section>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
      <a href="#" onClick={deletePost.bind(null, post.id)}>&#x1c2;</a>
    </section>
  );
}

Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
