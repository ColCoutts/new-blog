//selectors are dealing with state of a prop and will do either a SET/GET for these props
//
export const getPosts = state => state.posts.map((post, i) => ({
  ...post,
  id: i
}));

export const getPost = (state, id) => getPosts(state)[id];
