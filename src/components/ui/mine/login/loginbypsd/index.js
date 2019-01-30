import React,{Component} from 'react'
import './index.scss'
class Loginbypsd extends Component{
    render(){
        return (
            <div className ='mine-login-Loginbypsd-box'>
                <form>
                        <p>    
                            <span>+86</span>  
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>                  
                            <input type='text' placeholder='请输入手机号'></input>
                        </p>
                        <p>
                            <input type='text' placeholder='请输入密码'></input>
                        </p> 
                        <button className ="btn">
                            登录 
                        </button>                         
                    </form> 
            </div>
        )
    }
}

export default Loginbypsd