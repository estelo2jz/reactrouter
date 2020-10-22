import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

const User = (params) => {
  return (
    <h1>Welcome User {params.username}</h1>
  )
}

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }
  loginHandle = () => {
    this.setState({loggedIn: true})
  }
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink>
          </li>
          <li> 
            <NavLink to="/about" activeStyle={{color: 'green'}}>About</NavLink>
          </li>
          <li>
            <NavLink to="/user/john" activeStyle={{color: 'green'}}>User John</NavLink>
          </li>
          <li>
            <NavLink to="/user/Peter" activeStyle={{color: 'green'}}>User Peter</NavLink>
          </li>
        </ul>
        <input type="button" value="log in" onClick={this.loginHandle.bind(this)} />
        <Route path="/" exact render={() => {
          return (
            <h1>Hello</h1>
          )
        }} />
        <Route path="/about" render={() => {
          return (
            <h1>About</h1>
          )
        }} />
        <Route path="/user/:username" exact strick render={({match}) => {
          this.state.loggedIn ? ( <User username={match.params.username} />) : (<Redirect to="/" />)
        }} />
      </div>
    </Router>
    )
  }
}

export default Navigation;