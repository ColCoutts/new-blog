export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (title, body) => ({
  type: CREATE_COMMENT,
  payload: { title, body }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, id) => ({
  type: DELETE_COMMENT,
  payload: { postId, id }
});
