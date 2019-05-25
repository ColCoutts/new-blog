import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import Home from './Home';
import Post from './posts/Post';

export default function App(){
  return (
    <Router>
      <Link to="/">HOME</Link>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/posts/:postId" component={Post} />
      </Switch>
    </Router>
  );
}
