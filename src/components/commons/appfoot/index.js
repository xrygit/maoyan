import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
class AppFoot extends Component{
    renderNavs(){
        let {fRoutes} = this.props;
        return (
            <ul>
                {
                    fRoutes.map( item => {
                        return (
                            <li key = {item.id}>
                                <NavLink
                                    to = {{
                                        pathname: item.path
                                    }}
                                    activeClassName = "active"
                                    exact = {item.exact}                                
                                >
                                    <i className={"fa fa-"+ item.icon}></i>
                                    <span>{item.title}</span>
                                </NavLink>                     
                            </li>         
                        )
                    })
                }
            </ul>
            
        )
    }
    render(){
        return (  
            <div className = 'app-appfoot-box'>
                {this.renderNavs()} 
            </div>            
        )
    }
}
AppFoot.defaultProps = {
    fRoutes:[
        {
            id:1,
            path: '/',
            title: '电影',
            icon : 'file-movie-o',          
            exact :true
        },
        {
            id:2,
            path: '/film',
            title: '影院',
            icon : 'film',          
            exact :true
        },
        {
            id:3,
            path:'/mine',
            title: '我的',
            icon : 'user-o',        
            exact :true
        }
    ]
}
export default AppFoot