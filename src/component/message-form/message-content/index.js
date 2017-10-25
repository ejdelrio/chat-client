import React from 'react'

class MessageContent extends React.Component {
  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitData();

    this.setState({
      content: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name={'content'}
            type={'text'}
            placeholder={'Message'}
            value={this.props.content}
            onChange={this.props.onChange}
          />
          <button type={'submit'}>➜</button>
        </form>
      </div>
    )
  }
}

export default MessageContent;