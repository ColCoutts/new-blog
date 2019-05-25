//define case in variable
//function will destructure the props that will be getting placed in the store
//at this point consider how you would like the store to be made and how inputted data
//will interact with it
export const CREATE_POST = 'CREATE_POST';
export const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body }
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});
