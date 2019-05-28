import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment, deleteComment }) {
  console.log('COMMENT', comment);
  return (
    <section>
      <h2>{comment.title}</h2>
      <p>{comment.body}</p>
      <a href="#" onClick={deleteComment.bind(null, comment.id)}>&#x1c2;</a>
    </section>
  );
}

Comment.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

export default Comment;
