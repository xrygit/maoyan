import React,{Component} from 'react'
import './index.scss'
class Login extends Component{
    render(){
        return (
            <div className='app-mine-box'>
             <div className ='header'>
                <div className='top'>
                    <i class="fa fa-cog" aria-hidden="true"></i>
                </div> 
                <div>
                    <span>立即登录</span>

                </div>
            </div>
            </div>
        )
    }
}

export default Login