import './_message-form.scss';
import React from 'react';
import {connect} from 'react-redux';


import * as convoActions from '../../action/convo-action.js';
import MessageHeader from './message-header';
import MessageContent from './message-content';
import ConvoContent from './convo-content';

class MessageForm extends React.Component {
  constructor (props) {
    super(props);

    let memberHash = this.props.members.reduce((obj, profile) => {
      obj[profile.userName] = profile;
      return obj;
    }, {});


    this.state = {
      members: this.props.members,
      memberHash: memberHash,
      memberSearch: '',
      content: '',
      fuzzySearch: [],
    };
    this.trieQuery = this.trieQuery.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.compileConvo = this.compileConvo.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  compileConvo() {
    let convoData = {...this.state};
    convoData.members = [...this.state.members, this.props.profile];
    convoData.sender = this.props.profile.userName;
    convoData.senderID = this.props.profile._id;
    convoData.convoHubID = this.props.node ? this.props.node.convoHubID : undefined;

    return convoData;
  }


  onChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  removeMember(profile) {
    let {members, memberHash} = this.state;
    delete memberHash[profile.userName];
    this.setState({
      members: members.filter(user => user.userName !== profile.userName),
      memberHash
    })
  }

  addMember(profile) {
    let {members, memberHash} = this.state;
    if(!memberHash[profile.userName]) {
      members.push(profile);
      memberHash[profile.userName] = profile;
    }

    this.setState({
      members,
      memberHash,
      memberSearch: '',
      fuzzySearch: []
    })
  }

  trieQuery(e) {
    let {name, value} = e.target;
    let fuzzySearch = value ? this.props.contactTrie.searchUsers(value) : [];
    this.setState({
      [name]: value,
      fuzzySearch
    })
  }

  submitData(content) {
    let compiledData = this.compileConvo();
    compiledData.content = content;
    console.log('CONVO_DATA:', compiledData);

    let messageSubmission = compiledData.convoHubID ?
    this.props.postMessage:
    this.props.newConvo;
    messageSubmission(compiledData);

  }


  render() {

    let {node} = this.props;
    let messages
    if (node) messages = node.messages;

    return (
      <section id={'message-form'}>
        <MessageHeader
          close={this.props.close}
          existing={this.props.existing}
          members={this.state.members}
          removeMember={this.removeMember}
          memberSearch={this.state.memberSearch}
          trieQuery={this.trieQuery}
          addMember={this.addMember}
          memberHash={this.state.memberHash}
          fuzzySearch={this.state.fuzzySearch}
          profile={this.props.profile}
        />
        <section>
          <ConvoContent
            profile={this.props.profile}
            messages={this.props.messages}
            node={this.props.node}
          />
          <MessageContent
            submitData={this.submitData}
          />
        </section>
      </section>
    )
  }
}


let mapStateToProps = state => ({
  contactTrie: state.contactTrie,
  profile: state.profile,
  messages: state.messages
})

let mapDispatchToProps = dispatch => ({
  postMessage: convoData => dispatch(convoActions.postMessage(convoData)),
  newConvo: convoData => dispatch(convoActions.postConvo(convoData))

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);