import React from 'react';
import PropTypes from 'prop-types';
import CommentById from '../../containers/comments/CommentById';
import CreateComment from '../../containers/comments/CreateComment';

function PostDetail({ post }) {
  const paras = post.body.split('\n').map((postBody, index) => (
    <p key={index}>{postBody}</p>
  ));
  return (
    <section>
      <h1>{post.title}</h1>
      {paras}
      <CommentById postId={post.id}/>
      <CreateComment postId={post.id} />
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
