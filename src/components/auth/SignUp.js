import React, { PureComponent } from 'react'

class SignUp extends PureComponent {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  render() {
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
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
