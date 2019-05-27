export const getComments = state => state.comments.map((comment, index) => ({
  ...comment,
  id: index
}));

export const getComment = (state, id) => getComments(state)[id];
