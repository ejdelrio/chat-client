import React from 'react'

class MessageContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitData(this.state.content);
    this.setState({
      content: ''
    })
  }
  onChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
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
            value={this.state.content}
            onChange={this.onChange}
          />
          <button type={'submit'}>➜</button>
        </form>
      </div>
    )
  }
}

export default MessageContent;