import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import Home from './Home';
// import Post from './posts/Post';
import PostById from '../containers/posts/PostById';

export default function App(){
  return (
    <Router>
      <Link to="/">HOME</Link>
      <Switch>
        <Route path="/posts/:id" component={PostById} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
