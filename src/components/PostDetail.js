import * as React from 'react';

const POSTURL = 'http://localhost:8080/api/get_post/?slug=';

export default class PostDetail extends React.Component {
  state = {
    post: {}
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = async () => {
    const response = await fetch(POSTURL + this.props.match.params.slug);
    const {post}= await response.json();
    this.setState({post});
  }

  formatPost = ({property, key, isHtml = false, color}) => {
    if (isHtml) {
      return (
        this.state.post && this.state.post[property]
        ? <p
          key={key}
          dangerouslySetInnerHTML={{__html: this.state.post[property]}}
          style={{color}}
        />
        : null
      );
    }
    return (
      <p
        key={key}
        style={{color}}
      >
        {
          this.state.post && this.state.post[property]
          ? this.state.post[property]
          : null
        }
      </p>
    )
  }

  render() {
    return (
      <div>
        {
          [
            this.formatPost({property: 'title', key: 'uno' }),
            this.formatPost({isHtml: true, property: 'content', key: 'dos'}),
            this.formatPost({key: 'tres', property: 'date'}),
          ]
        }
      </div>
    );
  }
}
