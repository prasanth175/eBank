import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {user: '', pin: '', errorStatus: false, errorTxt: ''}

  submitForm = async event => {
    event.preventDefault()
    const {user, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const dataObj = {user_id: user, pin}
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(dataObj),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      const getToken = data.jwt_token
      Cookies.set('jwt_token', getToken, {expires: 1})
      history.replace('/')
    } else {
      this.setState({errorStatus: true, errorTxt: data.error_msg})
    }
  }

  onUser = event => this.setState({user: event.target.value})

  onPin = event => this.setState({pin: event.target.value})

  render() {
    const getToken = Cookies.get('jwt_token')
    if (getToken !== undefined) {
      return <Redirect to="/" />
    }
    const {user, pin, errorStatus, errorTxt} = this.state
    return (
      <div className="main-container">
        <div className="mid-container">
          <div className="img-container">
            <img
              className="login-img"
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </div>
          <form className="submit-form" onSubmit={this.submitForm}>
            <h1 className="login-heading">Welcome Back!</h1>
            <label className="lab" htmlFor="userInput">
              User ID
            </label>
            <input
              className="login-input"
              id="userInput"
              placeholder="Enter User ID"
              value={user}
              onChange={this.onUser}
              type="text"
            />
            <label className="lab" htmlFor="inputPin">
              PIN
            </label>
            <input
              className="login-input"
              id="inputPin"
              placeholder="Enter PIN"
              value={pin}
              onChange={this.onPin}
              type="password"
            />
            <button className="login-btn" type="submit">
              Login
            </button>
            {errorStatus && <p className="error-msg">{errorTxt}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
