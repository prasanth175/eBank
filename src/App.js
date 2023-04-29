import {Route, Switch} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
