import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as authActions from '../../action/auth-action.js';
import * as util from '../../lib/util.js';

import HeaderBar from '../header-bar';
import ProfilePage from '../profile-page';

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
        <HeaderBar
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
