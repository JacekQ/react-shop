import React, { Component } from 'react'
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss'

import { signUpStart } from '../../redux/user/user.actions';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = initialState;
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    const {signUpStart} = this.props;

    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert('Passwords don\'t match!');
      return;
    }

    signUpStart({ displayName, email, password });
  }
  
  handleChange = event => {
    const { value, name } = event.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Display Name"
            name="displayName"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
