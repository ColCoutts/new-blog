import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  } 

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, body } = this.state;
    this.props.onSubmit(title, body);
    this.setState({
      title: '',
      body: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" value={title} onChange={this.handleChange} />
        <textarea name="body" type="text" value={body} onChange={this.handleChange}></textarea>
        <button>SUBMIT COMMENT</button>
      </form>
    );
  }
}
