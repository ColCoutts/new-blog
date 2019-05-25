import React from 'react';
import AllPosts from '../containers/posts/AllPosts';
import CreatePost from '../containers/posts/CreatePost';

export default function Home() {
  return (
    <>
    <h1>CreatePost a Post</h1>
    <section>
      <CreatePost />
    </section>
    <h3>posts</h3>
    <section>
      <AllPosts />
    </section>
    </>
  );
}
