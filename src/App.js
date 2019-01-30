import React, { Component } from 'react'
import {Home,Mine,Film} from './components/ui'
import {Route,Switch,withRouter} from 'react-router-dom'
import {AppFoot} from './components/commons'
import Login from './components/ui/mine/login'
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
      child:{
        path:'/mine/login',
        component: Login,
      }     
    },
    {
      id:3,
      path:'/film',
      component: Film,
      exact:true
    }
  ]
}
export default withRouter(App);
