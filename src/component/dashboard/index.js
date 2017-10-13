import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as authActions from '../../action/auth-action.js';
import HeaderBar from '../header-bar';

class DashBoard extends React.Component {

  render() {
    return(
      <section id='dashboard'>
        <HeaderBar />
        <button onClick={this.props.logout}>Logout</button>
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.tokenDelete())
})

export default connect(undefined, mapDispatchToProps)(DashBoard);
