import React,{Component} from 'react'
import './index.scss'
import AppFoot from '../../commons/appfoot'
import Homelist from './homelist'
class Home extends Component{
    render(){
        return (
            <div class='app-home-box'>
              <header>
                  猫眼电影
              </header>
              <div className = 'topbar clear'>
                <div className = 'city-entry l'>
                    <span>合肥</span>
                    <i class = 'fa fa-sort-down'></i>
                </div>
                <ul className = 'l'>
                    <li><a>正在热映</a></li>
                    <li><a>即将上映</a></li>
                </ul>
                <i className = 'r fa fa-search'></i>
              </div>
              <Homelist/>

              <AppFoot/>
            </div>
        )
    }
}

export default Home