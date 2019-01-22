import React,{Component} from 'react'
import './index.scss'
import {Route} from 'react-router-dom'
import Login from './login'
import User from './user'
class Mine extends Component{
    render(){
        return (
            <div className='app-mine-box'>
                <Route path = '/mine/login' component={Login}></Route>
                <Route path = '/mine/user' component={User}></Route>
            </div>
        )
    }
}

export default Mine