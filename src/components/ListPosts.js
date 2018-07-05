import React from 'react';
import {Link} from 'react-router-dom';
import Title from './Title';

const URL = 'http://localhost:8080/api/get_recent_posts/';

export default class ListPosts extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    try {
      const postsRaw = await fetch(URL);
      const {posts} = await postsRaw.json();
      console.log(posts);
      this.setState({posts});
    } catch (error) {
      console.error(error);
    }
  }

  renderPosts = () => {
    return this.state.posts.map(({slug, title})=> {
      return (
        <li key={slug}>
          <Link to={`post/${slug}`}>{title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Title date={new Date()}/>
        <p>Listado de Posts</p>
        <ul>
          {this.renderPosts()}
        </ul>
      </React.Fragment>
    );
  }
}
