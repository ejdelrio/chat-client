import './_message-form.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as util from '../../lib/util';
import * as convoActions from '../../action/convo-action.js';

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

  submitData(e) {
    e.preventDefault();
    let compiledData = this.compileConvo();

    let messageSubmission = compiledData.convoHubID ?
    this.props.postMessage:
    this.props.newConvo;
    messageSubmission(compiledData);

  }

  render() {
    return (
      <section id={'message-form'}>
        <div>
          <div>
            <button
              onClick={this.props.close}
            >
              Cancel
            </button>
            <p>Message</p>
          </div>
          {util.renderIf(!this.props.existing,
            <div className={'add-contacts'}>
              <p>To:</p>
              <ul>
                {this.state.members.map((val, ind) => {
                  return(
                    <li key={ind}>
                      <p>{val.userName}
                        <span
                          onClick={() => this.removeMember(val)}
                        >
                        X
                      </span>
                      </p>
                    </li>
                  )
                })}
              </ul>
              <input
                name={'memberSearch'}
                type={'text'}
                placeholder={'Search'}
                value={this.state.memberSearch}
                onChange={this.trieQuery}
              />
            </div>
          )}
          {util.renderIf(!this.props.existing,
            <ul>
              {this.state.fuzzySearch.map((profile, ind) => {
                let isNotMember = !this.state.memberHash[profile.userName]
                if (isNotMember) return(
                  <li
                    key={ind}
                    onClick={() => this.addMember(profile)}
                  >
                    <p>{profile.userName}</p>
                  </li>
                )
              })}
            </ul>
          )}
          {util.renderIf(this.props.existing,
            <section>
              <p></p>
            </section>
          )}
        </div>
        <section>
          <ul>

          </ul>
          <div>
            <form onSubmit={this.submitData}>
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
        </section>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  contactTrie: state.contactTrie,
  profile: state.profile
})

let mapDispatchToProps = dispatch => ({
  postMessage: convoData => dispatch(convoActions.postMessage(convoData)),
  newConvo: convoData => dispatch(convoActions.postConvo(convoData))

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);