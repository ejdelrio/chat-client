import './_auth-form.scss';
import React from 'react';
import * as util from '../../lib/util.js';
class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      emailConfirm: '',
      passWord: '',
      passWordConfirm: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    let { name, value } = e.target;

    if(name !== 'passWord' || name !== 'passwordConfirm') value = value.toLocaleLowerCase();

    this.setState({
      [name]: value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let {setError, auth} = this.props;
    let {email, emailConfirm, passWord, passWordConfirm} = this.state;

    if(auth === 'signup') {
      if(email !== emailConfirm) return setError('You\'re confirmed email does not match');
      if(passWord !== passWordConfirm) return setError('You\'re confirmed password does not match');
    }
    this.props.onComplete(this.state)
    .catch(error => {
      let {response} = error;
      if(response) this.props.setError(error.response.text);
    })
  }

  render() {
    let emailInput = (
      <input
        name='email'
        type='email'
        placeholder='Enter a valid email address'
        value={this.state.email}
        onChange={this.onChange}
      />
    )
    let emailConfirm = (
      <input
        name='emailConfirm'
        type='email'
        placeholder='Confirm email address'
        value={this.state.emailConfirm}
        onChange={this.onChange}
      />
    )
    let passWordConfirm = (
      <input
        name='passWordConfirm'
        type='password'
        placeholder='Confirm password'
        value={this.state.passWordConfirm}
        onChange={this.onChange}
      />
    )


    return (
      <form
        onSubmit={this.onSubmit}
        className={`auth-form ${this.props.auth}`}
      >

        <input
          name='userName'
          type='text'
          value={this.state.userName}
          placeholder='Enter a valid user name'
          onChange={this.onChange}
        />
        <input
          name='passWord'
          type='password'
          value={this.state.passWord}
          placeholder='Enter a password'
          onChange={this.onChange}
        />
        {util.renderIf(this.props.auth === 'signup', passWordConfirm)}
        {util.renderIf(this.props.auth === 'signup', emailInput)}
        {util.renderIf(this.props.auth === 'signup', emailConfirm)}
        <button type='submit'>{this.props.auth}</button>
      </form>
    );
  };
}

export default AuthForm;
