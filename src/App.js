import React, { Component } from 'react'
import Home from './components/ui/home'
import {Route,Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">    
        <Switch>
          <Route path = '/' component = {Home} exact></Route>
        </Switch>        
      </div>
    );
  }
}

App.defaultProps = {
  routes:[
    {
      id:1,
      path:'/',
      component: Home,
      exact:true
    }
  ]
}
export default App;
