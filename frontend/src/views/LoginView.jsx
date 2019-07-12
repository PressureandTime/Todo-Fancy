import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/ActionCreators';
import {
  WrapperLogin,
  LeftContainer,
  RightContainer,
  SignIn,
  SignForm,
  PrimaryBtn,
  ShowCase,
  MainFooter
} from './LoginViewStyle';

class LoginView extends React.Component {
  onLogin = event => {
    event.preventDefault();

    const usernameInput = event.target['username'];
    const passwordInput = event.target['password'];
    const credentials = {
      username: usernameInput.value,
      password: passwordInput.value
    };

    usernameInput.value &&
      passwordInput.value &&
      this.props.login(credentials).then(() => {
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div className="login-view-wrapper">
        <WrapperLogin>
          <LeftContainer>
            <SignIn>
              <SignForm onSubmit={this.onLogin}>
                <form onSubmit={this.onLogin}>
                  <img src="https://img.icons8.com/cute-clipart/128/000000/task.png" />

                  <input
                    name="username"
                    placeholder="Username"
                    onChange={this.onChangeHandler}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <PrimaryBtn type="submit">Log In</PrimaryBtn>
                </form>
              </SignForm>
            </SignIn>
            <MainFooter>
              <p className="login-copy-right">
                Copyright &copy; 2019, Todo All Rights Reserved
              </p>
              <div>
                <a className="terms-of-use" href="#">
                  terms of use
                </a>{' '}
                |{' '}
                <a className="terms-of-use" href="#">
                  Privacy Policy
                </a>
              </div>
            </MainFooter>
          </LeftContainer>
          <RightContainer>
            <ShowCase>
              <div className="container">
                <span className="text1">
                  Let's create the future <strong>together</strong>
                </span>
                <span className="text2">
                  <h2>Start a FREE 10-day trial</h2>
                </span>
              </div>
            </ShowCase>
          </RightContainer>
        </WrapperLogin>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginView);
