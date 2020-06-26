import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React, { PureComponent } from 'react';

import { signUp } from '../../store/actions/authActions';

class SignUp extends PureComponent {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  authError: state.auth.authError

})

const mapDispatchToProps = (dispatch) => ({
  signUp: (creds) => dispatch(signUp(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);