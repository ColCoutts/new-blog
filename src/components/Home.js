import React from 'react';
import AllPosts from '../containers/posts/AllPosts';
import CreatePost from '../containers/posts/CreatePost';
import styles from './Home.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <section>
        <h1>Create a Post</h1>
        <CreatePost />
      </section>
      <section>
        <h3>posts</h3>
        <AllPosts />
      </section>
    </section>
  );
}
