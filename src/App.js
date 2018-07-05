import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ListPosts from './components/ListPosts';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ul>
            <li>
              <Link to="/">Listado de Posts</Link>
            </li>
            <li>
              <Link to="/create-post">Creación de Posts</Link>
            </li>
          </ul>
          <Route exact path="/" component={ListPosts} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/post/:slug" component={PostDetail} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
