import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard'
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentLogin, setCurrentLogin] = useState("home")

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
