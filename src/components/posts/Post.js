import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <section>
      <p>{post.title}</p>
      <textarea>{post.body}</textarea>
    </section>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
