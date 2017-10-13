import './_content.scss';
import React from 'react';
import {connect} from 'react-redux';

import Home from '../home';
import SearchUser from '../search-user';
import ChatFooter from '../chat-footer';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: ''
    }
    this.componentSwitch = this.componentSwitch.bind(this);
    this.flipSwitch = this.flipSwitch.bind(this);
  }
  componentSwitch(currentView) {
    switch (currentView) {
      case 'home':
        return (
          <Home
            profileClick={this.props.profileClick}
          />
        );
      case 'contacts':
        return (
          ''
        );
      case 'search-user':
        return (
          <SearchUser />
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
