import './_message-form.scss';
import React from 'react';
import {connect} from 'react-redux';


import * as convoActions from '../../action/convo-action.js';
import MessageHeader from './message-header';
import MessageContent from './message-content';
import ConvoContent from './convo-content';



function checkForExistingConvo(memberHash, membersArr, convos) {

  let filteredConvos = convos.filter(node => node.members.length !== membersArr.length);

  for (let i = 0; i < filteredConvos.length; i++) {
    let members = filteredConvos[i].members;

    for (let j = 0; j < members.length; j++) {
      let userName = members[j].userName;
      if(!memberHash[userName]) break;
      if(j === members.length - 1) return filteredConvos[i];
    }
  }
}

class MessageForm extends React.Component {
  constructor (props) {
    super(props);

    let {members, profile} = this.props;
    let memberHash = members.reduce((obj, profile) => {
      obj[profile.userName] = profile;
      return obj;
    }, {});

    let preExistingNode = checkForExistingConvo(
      {...memberHash, [profile.userName]: profile},
      members,
      this.props.convos
    );

    let existing = members.length > 0 ? true : this.props.existing;


    this.state = {
      members: this.props.members,
      memberHash: memberHash,
      memberSearch: '',
      content: '',
      fuzzySearch: [],
      seeTyping: false,
      node: !this.props.node ? preExistingNode : this.props.node,
      existing
    };
    this.trieQuery = this.trieQuery.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.compileConvo = this.compileConvo.bind(this);
    this.submitData = this.submitData.bind(this);
    this.sendTyping = this.sendTyping.bind(this);
  }

  componentDidMount() {
    let {socket, profile} = this.props;
    let {node} = this.state;
    let id;

    if(node) id = node.convoHubID;
    socket.removeListener('showTyping*');

    if(id)
      !socket.hasListeners(`showTyping-${id}`) ?

      socket.on(`showTyping-${id}`, data => {
        let {convoNode, seeTyping, userName} = data;

        if(profile.userName !== userName && convoNode.convoHubID === node.convoHubID) {
          this.setState({seeTyping})
        }
      }):

      null;
  }



  compileConvo() {
    let convoData = {...this.state};
    convoData.members = [...this.state.members, this.props.profile];
    convoData.sender = this.props.profile.userName;
    convoData.senderID = this.props.profile._id;
    convoData.convoHubID = this.state.node ? this.state.node.convoHubID : undefined;

    return convoData;
  }


  onChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    });
    this.sendTyping();
  }

  removeMember(userProfile) {
    let {members, memberHash} = this.state;
    let {profile} = this.props;

    let newMembers = members.filter(user => user.userName !== userProfile.userName);

    delete memberHash[userProfile.userName];
    let node = checkForExistingConvo(
      {...memberHash, [profile.userName]: profile},
      newMembers,
      this.props.convos
    );

    this.setState({
      members: newMembers,
      memberHash,
      node
    })
  }

  addMember(userProfile) {
    let {members, memberHash} = this.state;
    let {profile} = this.props;

    if(!memberHash[userProfile.userName]) {
      members.push(userProfile);
      memberHash[userProfile.userName] = userProfile;
    }

    let node = checkForExistingConvo(
      {...memberHash, [profile.userName]: profile},
      members,
      this.props.convos
    );

    this.setState({
      members,
      memberHash,
      memberSearch: '',
      fuzzySearch: [],
      node,
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

  sendTyping() {
    let {node} = this.state;
    let {socket, profile} = this.props;


    socket.emit('sendTyping', {convoNode: node, userName: profile.userName});
  }

  submitData() {

    let compiledData = this.compileConvo();

    let messageSubmission = compiledData.convoHubID ?
    this.props.postMessage:
    this.props.newConvo;


    messageSubmission(compiledData)
    .then(node => {
      this.props.socket.emit('clearTimer')
      if(!compiledData.convoHubID) {
        this.props.close();
        this.props.openNewConvo(node.members, true, node);
      }
    })
    .then(this.setState({content: ''}))

  }



  render() {
    return (
      <section id={'message-form'}>
        <MessageHeader
          close={this.props.close}
          existing={this.state.existing}
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
            node={this.state.node}
            seeTyping={this.state.seeTyping}
          />
          <MessageContent
            submitData={this.submitData}
            showTyping={this.showTyping}
            onChange={this.onChange}
            content={this.state.content}
          />
        </section>
      </section>
    )
  }
}


let mapStateToProps = state => ({
  contactTrie: state.contactTrie,
  profile: state.profile,
  messages: state.messages,
  socket: state.socket,
  convos: state.convos
});

let mapDispatchToProps = dispatch => ({
  postMessage: convoData => dispatch(convoActions.postMessage(convoData)),
  newConvo: convoData => dispatch(convoActions.postConvo(convoData))

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);