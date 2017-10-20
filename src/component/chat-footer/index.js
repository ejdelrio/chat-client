import './_chat-footer.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as SVG from '../svgs';
import * as util from '../../lib/util.js';

class ChatFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClass: 'highlight-icon',
      contactsClass: '',
      requestsClass: '',
      lookupClass: ''
    }
    this.changeClass = this.changeClass.bind(this);
    this.renderParent = this.renderParent.bind(this);
  }

  changeClass(keyName) {
    let [homeClass, contactsClass, requestsClass, lookupClass] = ['', '', '', '']
    let newClass = 'highlight-icon';
    return this.setState({
      homeClass,
      contactsClass,
      requestsClass,
      lookupClass,
      [keyName]: newClass
    })
  }
  renderParent(keyName, component) {
    return Promise.resolve(
      this.changeClass(keyName)
    )
    .then(() => this.props.flipSwitch(component));
  }

  render() {
    let {pending} = this.props.requests.received;
    return(
      <section id='chat-footer'>
        <div
          onClick={() => this.renderParent('homeClass', 'home')}
          className={this.state.homeClass}>
          {SVG.home('')}
        </div>
        <div
          onClick={() => this.renderParent('contactsClass', 'contacts')}
          className={this.state.contactsClass}
        >
          {SVG.contacts('')}
        </div>
        <div
          onClick={() => this.renderParent('requestsClass', 'requests')}
          className={this.state.requestsClass}
        >
          {SVG.request('requests')}
          {util.renderIf(pending.length > 0, <p>{pending.length}</p>)}
        </div>
        <div
          onClick={() => this.renderParent('lookupClass', 'search-user')}
          className={this.state.lookupClass}
        >
          {SVG.lookup('lookup')}
        </div>
      </section>
    )
  }
}
let mapStateToProps = state => ({
  requests: state.requests
})

export default connect(mapStateToProps, undefined)(ChatFooter);
