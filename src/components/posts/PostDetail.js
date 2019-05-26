import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  const paras = post.body.split('\n').map((postBody, index) => (
    <p key={index}>{postBody}</p>
  ));
  console.log('posts', paras);
  return (
    <section>
      <h1>{post.title}</h1>
      {paras}
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
