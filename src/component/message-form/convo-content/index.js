import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import superagent from 'superagent';

import * as convoActions from '../../../action/convo-action';
import * as util from '../../../lib/util';

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
  constructor (props) {
    super(props);

    this.state = {
      node: this.props.node
    }
  }

  componentDidMount(){
    let reactNode = ReactDom.findDOMNode(this);
    reactNode.scrollTop = reactNode.scrollHeight;


    let {node} = this.props;
    if(node && node.unread > 0) {
      this.props.markRead(node);

    }
  }
  componentDidUpdate(){
    let reactNode = ReactDom.findDOMNode(this);
    reactNode.scrollTop = reactNode.scrollHeight;

  }


  render() {
    let {socket, node} = this.props;
    let content, _id;

    if (node) {
      _id = node._id;

    }
    if(_id) content = this.props.messages[_id];




    return(
      <ul>
        {renderMessages(content, this.props.profile)}
        {util.renderIf(this.props.seeTyping,
          <li id={'see-typing'}>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

let mapStateToProps = state => ({
  token: state.token,
  socket: state.socket
})

let mapDispathToProps = dispatch => ({
  markRead: node => dispatch(convoActions.readConvo(node))
})

export default connect(mapStateToProps, mapDispathToProps)(ConvoContent);