import React,{Component} from 'react'
import './index.scss'
class Login extends Component{
    render(){
        return (
           <div className = 'app-login-box'>
                <div className='top clear'>
                  <i class="fa fa-times l" aria-hidden="true"></i>
                  <span className = 'r'>帮助</span>                 
                </div>             
                <main>
                    <h3 className='ltitle'>登录</h3>
                    <form>
                        <p>    
                            <span>+86</span>  
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>                  
                            <input type='text' placeholder='请输入手机号'></input>
                        </p>
                        <p>
                            <input type='text' placeholder='请输入号码'></input>
                        </p> 
                        <button class="btn">
                            登录 
                        </button>                         
                    </form>
                    <p className='clear ycode'>
                        <a className='l'>验证码登录</a>
                        <a className='r'>忘记密码</a>
                    </p>
                    <div className='login-bottom'>
                        <p className='clear'>                           
                            <img src="/wx.jpg" className='l' alt=""/>
                            <img src="/qq.jpg" className='r' alt=""/>
                        </p>                       
                        <p>
                            登录代表你已同意<b>《猫眼电影用户协议》</b>
                        </p>
                    </div>
                </main>
           </div>
        )
    }
}

export default Login