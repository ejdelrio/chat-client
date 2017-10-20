import './_content.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as util from '../../lib/util.js';
import Home from '../home';
import SearchUser from '../search-user';
import Requests from '../requests';
import ChatFooter from '../chat-footer';
import Contacts from '../contacts';
import MessageForm from '../message-form';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'home',
      renderMessageForm: false,
      messageMembers: [],
      messageNode: null,
      existingConvo: false
    }
    this.componentSwitch = this.componentSwitch.bind(this);
    this.flipSwitch = this.flipSwitch.bind(this);
    this.sendToSingleMember = this.sendToSingleMember.bind(this);
    this.cancelMessage = this.cancelMessage.bind(this);
  }

  sendToSingleMember(profile, existingConvo, messageNode) {

    this.setState({
      messageMembers: profile ? profile: [],
      renderMessageForm: true,
      existingConvo,
      messageNode
    })
  }

  cancelMessage() {
    this.setState({
      messageMembers: [],
      renderMessageForm: false,
      existingConvo: null,
      messageNode: null
    })
  }



  componentSwitch(currentView) {
    switch (currentView) {
      case 'home':
        return (
          <Home
            profileClick={this.props.profileClick}
            compose={this.sendToSingleMember}
          />
        );
      case 'requests':
        return (
          <Requests />
        );
      case 'search-user':
        return (
          <SearchUser />
        );
      case 'contacts':
        return(
          <Contacts
            sendMessage={this.sendToSingleMember}
            cancelMessage={this.cancelMessage}
          />
        );
      default:
        return;
    }
  }
  flipSwitch(currentView) {
    this.setState({currentView})
  }

  render() {
    return(
      <section id='content'>
        {util.renderIf(this.state.renderMessageForm,
          <MessageForm
            close={this.cancelMessage}
            members={this.state.messageMembers}
            existing={this.state.existingConvo}
            node={this.state.messageNode}
          />
        )}
        {this.componentSwitch(this.state.currentView)}
        <ChatFooter
          flipSwitch={this.flipSwitch}
        />
      </section>
    )
  }
}
let mapStateToProps = state => ({
  profile: state.profile
})
let mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Content);
