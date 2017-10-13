import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as authActions from '../../action/auth-action.js';
import * as util from '../../lib/util.js';

import ProfilePage from '../profile-page';
import Content from '../content';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileView: ''
    }
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage(pageName, newClass) {
    this.setState({[pageName]: newClass})
  }

  render() {
    return(
      <section id='dashboard'>
        <Content
          profileClick={() => this.renderPage('profileView', 'profile-page')}
        />
        <ProfilePage
          className={this.state.profileView}
          close={() => this.renderPage('profileView', 'hidden-page')}
        />
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.tokenDelete())
})

export default connect(undefined, mapDispatchToProps)(DashBoard);
