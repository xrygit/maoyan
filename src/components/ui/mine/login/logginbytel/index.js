import React, { Component } from 'react'
import './index.scss'
class Loginbytel extends Component {
    render() {
        return (
            <div className='mine-login-Loginbytel-box'>
                <form>
                    <p>
                        <span>+86</span>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        <input type='text' placeholder='请输入手机号'></input>
                    </p>
                    <p>
                        <span>未注册的手机号验证后自动创建猫眼账户</span>                        
                    </p>
                    <button className ="btn">
                        获取短信验证码
                    </button>
                </form>
            </div>
        )
    }
}

export default Loginbytel