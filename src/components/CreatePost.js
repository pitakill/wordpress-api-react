import React from 'react';

const NONCEURL = 'http://localhost:8080/?json=get_nonce&controller=posts&method=create_post&insecure=cool';
const CREATEPOSTURL = 'http://localhost:8080/api/create_post/?nonce=';

export default class CreatePost extends React.Component {
  state = {
    nonce: '',
  }

  componentDidMount() {
    this.getNonce();
  }

  createPost = async () => {
    try {
      const responseRaw = await fetch(CREATEPOSTURL + this.state.nonce);
      const test = await responseRaw.json();
      console.log(test);
    } catch (error) {
      console.error(error);
    }
  }

  getNonce = async () => {
    try {
      const responseRaw = await fetch(NONCEURL);
      const {nonce} = await responseRaw.json();
      console.log(nonce);
      this.setState({nonce});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <button
        onClick={this.createPost}
      >
        Create Post
      </button>
    );
  }
}
