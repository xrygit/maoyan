import React,{Component} from 'react'
import './index.scss'
class AppFoot extends Component{
    render(){
        return (  
            <div className = 'app-appfoot-box'>
            <ul>
                <li>
                    <a>
                         <i class="fa fa-file-movie-o"></i>
                        <span>电影</span>
                    </a>                     
                </li>
                <li>
                    <a>
                         <i class="fa fa-film"></i>
                        <span>影院</span>
                    </a>                     
                </li>
                <li>
                    <a>
                         <i class="fa fa-user-o"></i>
                        <span>我的</span>
                    </a>                     
                </li>              
            </ul>  
            </div>            
        )
    }
}

export default AppFoot