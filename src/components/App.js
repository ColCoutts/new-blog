import React from 'react';
import PostForm from './posts/PostForm';

export default function App(){
  return (
    <PostForm onSubmit={() => ({ title: 'hello', body: 'body' })} />
  );
}
