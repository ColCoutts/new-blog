import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentList = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} deleteComment={deleteComment} />
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

export default Comments;
