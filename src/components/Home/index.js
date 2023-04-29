import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Home extends Component {
  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    return (
      <div className="home-container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
            alt="website logo"
          />
          <button className="logout-btn" type="button" onClick={this.onLogout}>
            Logout
          </button>
        </nav>

        <div className="card-container">
          <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
          <img
            className="card-img"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
            alt="digital card"
          />
        </div>
      </div>
    )
  }
}

export default Home
