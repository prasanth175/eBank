import './index.css'

const NotFound = () => (
  <div className="fail-container">
    <img
      className="fail-img"
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
      alt="not found"
    />
    <h1 className="fail-heading">Page Not Found</h1>
    <p className="fail-txt">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
