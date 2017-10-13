import './_profile-page.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as authActions from '../../action/auth-action.js';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <section className={this.props.className}>
        <div>
          <p onClick={this.props.close}>Done</p>
          <p>Profile</p>
        </div>
        <section>
          <div>
          </div>
          <button onClick={this.props.logout}>Logout</button>
        </section>
      </section>
    )
  }
}
let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.tokenDelete())
})

export default connect(undefined, mapDispatchToProps)(ProfilePage);
