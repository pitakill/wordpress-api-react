import * as React from 'react';

// Componente clase
// Tiene estado
export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      date: this.props.date
    }
  }

  componentDidMount() {
    const id = window.setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);

    this.setState({id});
  }

  componentWillUnmount() {
    window.clearInterval(this.state.id);
  }

  render() {
    return (
      <h1>{this.state.date.toString()}</h1>
    );
  }
}

// Componente funcional
// No tiene estado
//export default (props) => <h1>{props.date}</h1>;
