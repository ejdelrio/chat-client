import React from 'react';
import ReactDom from 'react-dom';

function renderMessages(messages, profile) {
  if(!messages) return;
  return messages.map((message, ind) => {
    let className = profile.userName === message.sender ?
      'sent-message':
      'from-message';
    return(
      <li
        key={ind}
        className={className}
      >
        <label>{`From: ${message.sender}`}</label>
        <p>{message.content}</p>
      </li>
    )
  })
}

class ConvoContent extends React.Component {

  componentDidMount(){
    let node = ReactDom.findDOMNode(this);
    console.log(node.scrollTop, node.scrollHeight);
    node.scrollTop = node.scrollHeight;
  }

  componentDidUpdate() {
    let node = ReactDom.findDOMNode(this);
    console.log(node.scrollTop, node.scrollHeight);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    let content, _id;
    if (this.props.node) _id = this.props.node._id;
    if(_id) content = this.props.messages[_id];
    return(
      <ul>
        {renderMessages(content, this.props.profile)}
      </ul>
    )
  }
}

export default ConvoContent;