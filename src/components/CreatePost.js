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
      //const responseRaw = await fetch(CREATEPOSTURL + this.state.nonce, {
        //credentials: 'include',
          ////'wordpress_logged_in_37d007a56d816107ce5b52c10342db37': 'polo%7C1530750488%7CPR8Y3Zz2HpYn4vZuuz0A4MptC3DEft8U84s4aB5uAKR%7C7c05872e5346831b1cf92dddfedf7c6f4f054d194e7ef818c71dac2169acecc3'
        //headers: {
          //'wordpress_logged_in_37d007a56d816107ce5b52c10342db37' : 'polo|1531794302|Kbequz55duM2EOvKxOylD5oEFV1ZlNGXvYvvA5WmWax|e6a01e404c0d3e7ea88f5db96dc517e88ee4d3bebaba6a7dcea7c60ad2a5103d'
        //}
      //});
      //const test = await responseRaw.json();
      //console.log(test);
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
        Hola
      </button>
    );
  }
}
