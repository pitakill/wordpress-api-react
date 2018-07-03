import React from 'react';
import ListPosts from './components/ListPosts';
import CreatePost from './components/CreatePost';

class App extends React.Component {
  render() {
    return (
      <div>
        <ListPosts />
        <CreatePost />
      </div>
    );
  }
}

export default App;
