import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const getToken = Cookies.get('jwt_token')
  if (getToken !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/ebank/login" />
}

export default ProtectedRoute
