import React, { Component } from 'react'
import {Home,Mine} from './components/ui'
import {Route,Switch} from 'react-router-dom'
import {AppFoot} from './components/commons'

class App extends Component {
  renderRoutes(){
   let { footNavs } = this.props;
   return footNavs.map( item =>
            <Route 
                key = {item.id} 
                path = {item.path} 
                component = {item.component} 
                exact={item.exact}
            >
            </Route>
   )
  }
  render() {
    return (
      <div className="App">
            <Switch>
              {this.renderRoutes()}
            </Switch> 
            <AppFoot/>       
      </div>
    );
  }
}

App.defaultProps = {
  footNavs:[
    {
      id:1,
      path:'/',
      component: Home,
      exact:true
    },
    {
      id:2,
      path:'/mine',
      component: Mine,
      exact:true
    }
  ]
}
export default App;
