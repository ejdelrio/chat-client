import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import * as util from '../../lib/util.js';

import AuthPage from '../auth-page';
import DashBoard from '../dashboard';

class App extends React.Component {


  render() {
    return(
      <BrowserRouter>
        <section>
          {util.renderIf(!this.props.token, <AuthPage />)}
          {util.renderIf(this.props.token), <DashBoard />}
        </section>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  token: state.token
});

export default connect(mapStateToProps, undefined)(App);
