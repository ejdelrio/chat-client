import './_auth-page.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as authActions from '../../action/auth-action.js';
import * as util from '../../lib/util.js';
import AuthForm from '../auth-form';
import Modal from '../modal';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: 'login',
      stateError: false,
      errorMessage: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.changeAuth = this.changeAuth.bind(this);
    this.setError = this.setError.bind(this);
    this.errorModalToggle = this.errorModalToggle.bind(this);
    this.setError = this.setError.bind(this);
  }

  setError(errorMessage) {
    let stateError = true;
    this.setState({
      stateError,
      errorMessage
    })
  }

  errorModalToggle() {
    let {stateError} = !this.state;
    this.setState({stateError});
  }

  changeAuth() {
    let auth = this.state.auth === 'login' ? 'signup' : 'login';
    this.setState({auth});
  }

  onSubmit(user) {
    let {login, signup} = this.props;
    let dispatchMethod = this.state.auth === 'login' ? login: signup;
    return dispatchMethod(user);
  }

  render() {
    let onSubmit = this.state.auth === 'login' ?
    this.props.login:
    this.props.signup;

    return(
      <section id='auth-page'>
        {util.renderIf(this.state.stateError,
          <Modal close={this.errorModalToggle}>
            <p id='auth-error'>{this.state.errorMessage}</p>
          </Modal>
        )}
        <AuthForm
          setError={this.setError}
          auth={this.state.auth}
          onComplete={this.onSubmit}
        />
        {util.renderIf(this.state.auth === 'login',
          <p>
            Dont have an account? <span onClick={this.changeAuth}> Register</span>
          </p>
        )}
        {util.renderIf(this.state.auth === 'signup',
          <p>
            <span onClick={this.changeAuth}>Return to login page</span>
          </p>
        )}
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  login: user => dispatch(authActions.login(user)),
  signup: user => dispatch(authActions.signup(user))
})

export default connect(undefined, mapDispatchToProps)(AuthPage);
