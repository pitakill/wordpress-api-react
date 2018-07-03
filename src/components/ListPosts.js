import React from 'react';

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
          <a href={slug}>{title}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderPosts()}
      </ul>
    );
  }
}
