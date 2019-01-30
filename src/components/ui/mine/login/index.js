import React,{Component} from 'react'
import './index.scss'
import loginbypsd from './loginbypsd'
import loginbytel from './logginbytel'



class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            type: 'tel'           
        }
    }
     handlerClick(){
         let {flag} = this.state
            this.setState({
                type: 'psd',                               
            })          
        }
    
  
    renderLogin(){
        let { type } = this.state    
       
        // let {loginbypsd,loginbytel} = this.props
        // let loginType = 'psd'
        let Form = loginbytel
        // let login = loginUser
        if(type !== 'tel'){       
            // loginType = 'tel'
            Form = loginbypsd
        }
        // let handerClick = () =>{
        //     this.setState({
        //         type: loginType
        //     })
        // }
        return (
            <div>
                <Form />
            </div>
        )
    }
    render(){
        let {type} = this.state
        return (
           <div className = 'app-login-box'>
                <div className ='top clear'>
                  <i className ="fa fa-times l" aria-hidden="true"></i>
                  <span className = 'r'>帮助</span>                 
                </div>             
                <main>
                    <h3 className='ltitle'>登录</h3>
                 
                    {/* <form>
                        <p>    
                            <span>+86</span>  
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>                  
                            <input type='text' placeholder='请输入手机号'></input>
                        </p>
                        <p>
                            <input type='text' placeholder='请输入密码'></input>
                        </p> 
                        <button class="btn">
                            登录 
                        </button>                         
                    </form>    
                    onClick = { handerClick } */}
                    {this.renderLogin()}
                    <p className='clear ycode'>
                        <a className='l' onClick = {this.handlerClick.bind(this)}> {type === 'tel' ? '验证码' : '密码'}登录</a>
                        <a className='r'> {type === 'tel' ? '忘记密码' : ''}</a>
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